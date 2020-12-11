import { flags } from "@oclif/command";
import * as fs from "fs-extra";
import * as shell from "shelljs";
import Install from "../install";
import Build from "../build";
import BaseCommand from "../../base";
import InitUser from "./user";

export default class Init extends BaseCommand {
  static description = `Init Iris CMS.\n its just multiple command 'install', 'build, 'firebase deploy', & 'init:user'`;

  static flags = {
    help: flags.help({ char: "h" }),
    "no-deploy": flags.boolean({
      char: "d",
      description: "Do not deploy to firebase",
    }),
    "no-install": flags.boolean({ char: "i", description: "Do not install" }),
    "no-build": flags.boolean({ char: "b", description: "Do not build" }),
    "no-init-call": flags.boolean({
      char: "c",
      description: "Do not call init functions.",
    }),
    email: flags.string({ char: "e", description: "Email to Register" }),
    password: flags.string({ char: "p", description: "Password to Register" }),
  };
  static args = [{ name: "file" }];
  async run() {
    const { args, flags } = this.parse(Init);
    // first check if this right directory
    let pjson = await fs.readJSON(process.cwd() + "/package.json");
    if (!(typeof pjson.iris_version == "string")) {
      this.error("This directory is not Iris Directory");
    }
    // first execute init
    // shelljs.exec('firebase init');
    // shell.exec('firebase use --clear');
    // child_process.execFileSync('firebase', ['init'], {stdio: 'inherit'});
    // step 1 install dependency for function & cms
    // check for yarn or npm
    if (!flags["no-install"]) {
      await Install.run([]);
    }

    // // step 2 build iris cms
    if (!flags["no-build"]) {
      await Build.run([]);
    }

    // step 3 deploy
    if (!flags["no-deploy"]) shell.exec("firebase deploy");
    // step 4 call init functions
    if (!flags["no-init-call"]) {
      let args = [];
      if (flags.email) {
        args.push("-e", flags.email);
      }
      if (flags.password) {
        args.push("-p", flags.password);
      }
      await InitUser.run(args);
    }
    this.log("Init Command Success ⚡");
    this.exit(0);
  }
}
