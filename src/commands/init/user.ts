import { flags } from "@oclif/command";
import BaseCommand from "../../base";
import firebase from "firebase";
import * as shell from "shelljs";
import cli from "cli-ux";

export default class InitUser extends BaseCommand {
  static description =
    "Init User for super admin.\n this can be called once per project. second time will be ignored as success.";

  static flags = {
    help: flags.help({ char: "h" }),
    email: flags.string({ char: "e", description: "Email to Register" }),
    password: flags.string({ char: "p", description: "Password to Register" }),
  };

  static args = [];

  async run() {
    const { args, flags } = this.parse(InitUser);
    let config: any = shell.exec("firebase apps:sdkconfig WEB");
    config = /(?<config>\{.*?\})/ms.exec(config);
    config = JSON.parse(config.groups.config);

    firebase.initializeApp(config);
    let init = firebase.app().functions().httpsCallable("init");
    // create first user
    this.log("Create Super Admin User...");
    while (true) {
      try {
        // just prompt for input
        // check for email argument
        const email = flags.email || await cli.prompt("enter email?");
        let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        if (!emailRegex.test(email)) {
          this.warn("not a valid email format");
          flags.email = undefined;
          continue;
        }
        const password = flags.password || await cli.prompt("enter password?");
        // assume its valid
        await init({
          email,
          password,
        }).then((res) => {
          this.log("success init firestore !!🤟");
        }).catch((e) => {
          this.error(e.message, {
            code: 'init_failed',
            suggestions: [
              'check if your firebase functions is deployed.'
            ]
          })
        });
        // exit loop
        break;
      } catch (e) {
        // repeat until success
        this.log(e.message);
        continue;
      }
    }
  }
}
