import {Command, flags} from '@oclif/command'
import * as shell from "shelljs";

export default class Deploy extends Command {
  static description = `deploy to firebase.\n syntax sugar to 'firebase deploy' with args`

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'args'}]

  async run() {
    const {args, flags} = this.parse(Deploy)
    shell.exec("firebase deploy " + args.args);
  }
}
