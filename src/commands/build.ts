import { Command, flags } from "@oclif/command";
import * as shell from "shelljs";
import cli from "cli-ux";

export default class Build extends Command {
  static description = `Build both functions, cms.\nbasically it call 'npm run build' on folder functions & cms. Just Syntax sugar if you call.`;

  static flags = {
    help: flags.help({ char: "h" }),
    only: flags.enum({
      options: ["functions", "cms"],
      default: null,
      description: "use this options if want run only one of them.",
    }),
  };

  async run() {
    const { args, flags } = this.parse(Build);
    let yarnFlag = shell.which("yarn");
    let npmFlag = shell.which("npm");
    cli.action.start("Start Building...");
    if (!(yarnFlag || npmFlag)) {
      this.error("Yarn or NPM needed for installing dependency");
    }
    let cwd = process.cwd();
    let cmd = (yarnFlag ? "yarn run" : "npm run") + " build";
    if (flags.only != null) {
      if (flags.only == "functions") {
        cli.action.start("Build Functions...");
        shell.cd(cwd + "/functions");
        shell.exec(cmd);
        cli.action.stop("done");
      } else {
        cli.action.start("Build CMS...");
        shell.cd(cwd + "/Iris-CMS");
        shell.exec(cmd);
        cli.action.stop("done");
      }
    } else {
      cli.action.start("Build Functions & CMS...");
      shell.cd(cwd + "/functions");
      shell.exec(cmd);
      shell.cd(cwd + "/Iris-CMS");
      shell.exec(cmd);
      cli.action.stop("done");
    }

    // go back
    shell.cd("..");
  }
}
