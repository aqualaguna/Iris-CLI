import { Command, flags } from "@oclif/command";
import * as fs from "fs-extra";
import downloadVersion, { getVersionLatest } from "../helper/downloadVersion";
import * as semver from "semver";
import * as uuid from "uuid";
const mkdirp = require("mkdirp");
const decompress = require("decompress");
var rimraf = require("rimraf");
import FSTree = require("fs-tree-diff");
import * as walkSync from "walk-sync";
import * as shell from "shelljs";
import cli from "cli-ux";

export default class Upgrade extends Command {
  static description =
    "Upgrade your Iris version. \n latest(default) if not specified.";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [{ name: "version" }];

  async run() {
    const { args, flags } = this.parse(Upgrade);
    // first let see current version
    const dirPath = process.cwd();
    const pjson = await fs.readJSON(dirPath + "/package.json");
    // check if version exists
    if (typeof pjson["iris_version"] == "string") {
      // check for version
      const version_target = args.version || (await getVersionLatest());
      if (pjson["iris_version"] == version_target) {
        this.log("Already up to date...");
        this.exit(0);
      } else {
        if (
          semver.gt(version_target, pjson["iris_version"], {
            includePrerelease: true,
          })
        ) {
          // okay valid!!
          cli.action.start('Download 2 related release.');
          const [fromfile, tofile] = await Promise.all([
            downloadVersion({
              version: pjson["iris_version"],
              config: this.config,
              force: false,
              log: this.log,
            }),
            downloadVersion({
              version: version_target,
              config: this.config,
              force: false,
              log: this.log,
            }),
          ]).catch(this.error);
          // let convert it yay...
          // first let extract both in cache shall we?
          // create folder to play around
          let uid = uuid.v4();
          let playfolderpath = this.config.cacheDir + "/" + uid;
          mkdirp.sync(playfolderpath);
          const frompath = playfolderpath + `/${pjson["iris_version"]}`;
          const topath = playfolderpath + `/${version_target}`;
          cli.action.start('Extracting...');
          // extract both
          await Promise.all([
            decompress(fromfile, frompath, {
              strip: 1,
            }),
            decompress(tofile, topath, {
              strip: 1,
            }),
          ]).catch(this.error);
          cli.action.stop();
          // decompress done let
          // calculate diff between 2 version.
          const current = new FSTree({
            entries: walkSync.entries(frompath),
          });
          const next = new FSTree({
            entries: walkSync.entries(topath),
          });
          cli.action.start('Calculating Diff...');
          let patch = current.calculatePatch(next, (a, b) => {
            // ignore directory
            if (a.isDirectory()) return true;
            if (a.relativePath == b.relativePath) {
              if (a.mode != b.mode) {
                return false;
              } else if (a.size != b.size) {
                return false;
              } else if (a.mtime == b.mtime) {
                return false;
              } else {
                return true;
              }
            } else return false;
          });
          cli.action.stop();
          cli.action.start('Applying Diff to current directory...');
          FSTree.applyPatch(topath, dirPath, patch, {
            create: function (inputPath, outputPath, relativePath) {
              shell.cp("-f", [inputPath], outputPath);
            },
            change: function (inputPath, outputPath, relativePath) {
              shell.cp("-f", [inputPath], outputPath);
            },
            mkdir: function (inputPath, outputPath, relativePath) {
              shell.mkdir(outputPath);
            },
            rmdir: function (inputPath, outputPath, relativePath) {
              shell.rm('-r', outputPath);
            },
            unlink: function (inputPath, outputPath, relativePath) {
              shell.rm(outputPath);
            },
          });
          cli.action.stop();
          cli.action.start('Updating Iris Version...');
          // Upgrade version to intended
          pjson['iris_version'] = version_target;
          fs.writeJsonSync(dirPath + "/package.json", pjson, {
            spaces: 2,
          });
          cli.action.stop();
          cli.action.start('Cleaning up...');
          // last step delete playground folder
          let tis = this;
          rimraf(playfolderpath, function (err: any) {
            console.log(err);
            if (err) tis.error(err);
            else tis.log("Successfully deleted cache folder.");
            // tis.exit(0);
          });
          cli.action.stop();
          this.log(`🔥🔥🔥 Finish Updating to version ${version_target}! 🔥🔥🔥`);
          this.exit(0);
        } else {
          this.error(
            "version provided is not valid must be greater version from before.",
            {
              code: "invalid_version",
            }
          );
        }
      }
    } else {
      this.error(
        "iris_version not defined in package.json. either this is not iris project or your settings is invalid.",
        {
          code: "invalid_config",
        }
      );
    }
  }
}
