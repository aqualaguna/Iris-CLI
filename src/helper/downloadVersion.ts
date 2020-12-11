import axios from "axios";
import cli from "cli-ux";
import * as fs from "fs-extra";
const mkdirp = require("mkdirp");

export default async function downloadVersion(
  opts: {
    version: string;
    config: any;
    log: Function;
    force: Boolean;
  } = { force: false, version: "none", config: {}, log: () => {} }
) {
  const { version, config, log, force } = opts;
  return await axios
    .get(
      "https://api.github.com/repos/aqualaguna/Iris/releases/tags/" + version
    )
    .then(({ data }) => {
      cli.action.start("connected");
      cli.prideAction;
      // this.log(data);
      log(`Using Iris CMS v ${version}`);
      let url = data.tarball_url;
      let path = config.cacheDir + `/iris-${version}.tgz`;
      cli.action.start("Check Cache...");
      if (fs.existsSync(path) && !force) {
        log(`Cache for version ${version} exists. `);
        log('Using Cache Data...');
        return path;
      } else {
        cli.action.start("Download From Server");
        return axios
          .get(url, {
            responseType: "stream",
          })
          .then(({ data }) => {
            if (!fs.existsSync(config.cacheDir)) mkdirp.sync(config.cacheDir);
            const writer = fs.createWriteStream(path);
            data.pipe(writer);
            return new Promise((resolve, reject) => {
              writer.on("finish", () => {
                resolve(path);
                cli.action.start("File Writen to cache!");
              });
              writer.on("error", reject);
            });
          });
      }
    });
}

export async function downloadVersionLatest(
  opts: {
    config: any;
    log: Function;
    force: Boolean;
  } = { force: false, config: {}, log: () => {} }
) {
  const { config, log, force } = opts;
  return await axios
    .get("https://api.github.com/repos/aqualaguna/Iris/releases/latest")
    .then(({ data }) => {
      cli.action.start("connected");
      // this.log(data);
      let version = data.tag_name;
      log(`Using Iris CMS v ${version}`);
      let url = data.tarball_url;
      let path = config.cacheDir + `/iris-${version}.tgz`;
      cli.action.start("Check Cache...");
      if (fs.existsSync(path) && !force) {
        log(`Cache for version ${version} exists. Using Cache Data...`);
        return path;
      } else {
        cli.action.start("Download From Server");
        return axios
          .get(url, {
            responseType: "stream",
          })
          .then(({ data }) => {
            if (!fs.existsSync(config.cacheDir)) mkdirp.sync(config.cacheDir);
            const writer = fs.createWriteStream(path);
            data.pipe(writer);
            return new Promise((resolve, reject) => {
              writer.on("finish", () => {
                resolve(path);
                cli.action.start("File Writen to cache!");
              });
              writer.on("error", reject);
            });
          });
      }
    });
}

export async function getVersionLatest() {
  return await axios
    .get("https://api.github.com/repos/aqualaguna/Iris/releases/latest")
    .then(({ data }) => {
      // this.log(data);
      let version = data.tag_name;
      return version;
    });
}
