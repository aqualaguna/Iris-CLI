import { Command, flags } from "@oclif/command";
const mkdirp = require("mkdirp");
import * as fs from "fs-extra";
const decompress = require("decompress");
import cli from "cli-ux";
import downloadVersion, { downloadVersionLatest, getVersionLatest } from '../../helper/downloadVersion';

export default class Create extends Command {
  static description = "Create Iris Project";
  // static github_auth_token = "59ef07328bab81a2c77f636d716b21e81c343de9";
  static args = [
    {
      name: "name", // name of arg to show in help and reference with args[name]
      required: true, // make the arg required with `required: true`
      description: "Project Name to be created", // help description
      default: "iris", // default value if no arg input
    },
  ];
  static flags = {
    help: flags.help({ char: "h" }),
    force: flags.boolean({
      char: "f",
      default: false,
      description: "make download from server.",
    }),
  };

  async run() {
    const { args, flags } = this.parse(Create);
    cli.action.start("connecting to server...");
    // check if version is state in args
    const [name, ver] = args.name.split('@');

    let version = ver || await getVersionLatest();
    let path: any = await downloadVersion({
      version,
      config: this.config,
      force: flags.force,
      log: this.log,
    })
      .catch(this.error);
    cli.action.start("Creating new Project...");
    let dirPath = process.cwd() + `/${name}`;
    mkdirp.sync(dirPath);
    await decompress(path, dirPath, {
      strip: 1,
    });
    
    // update package.json iris_version
    let pjson = await fs.readJSON(dirPath + "/package.json");
    pjson['iris_version'] = version;
    fs.writeJsonSync(dirPath + "/package.json", pjson, {
      spaces: 2,
    });

    cli.action.stop("\n🔥 success create new project 🔥"); // shows 'starting a process... done'
    this.exit(0);
  }
}
