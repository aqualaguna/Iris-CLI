import { Command, flags } from "@oclif/command";
import * as shell from "shelljs";
import cli from "cli-ux";

export default class Install extends Command {
  static description = `Install All dependency using yarn or npm.\n syntax sugar for 'npm i' or 'yarn' on folder functions or cms.`;

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const { args, flags } = this.parse(Install);

    let yarnFlag = shell.which("yarn");
    let npmFlag = shell.which("npm");
    if (!(yarnFlag || npmFlag)) {
      this.error("Yarn or NPM needed for installing dependency");
    }
    // yarn or npm exists
    let cwd = process.cwd();
    cli.action.start('Installing Dependency for Functions...');
    shell.cd(cwd + "/functions");
    let cmd = yarnFlag ? "yarn" : "npm i";
    shell.exec(cmd, { silent: true });
    this.log('Finish Installing Functions Dependency');
    cli.action.start('Installing Dependency for Iris-CMS...');
    shell.cd(cwd + "/Iris-CMS");
    shell.exec(cmd, { silent: true });
    this.log('Finish Installing Functions Dependency');
    cli.action.stop('done');
    // go back
    shell.cd("..");
  }
}
