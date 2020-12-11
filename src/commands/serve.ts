import { flags} from '@oclif/command'
import BaseCommand from '../base'
import * as shell from "shelljs"
import * as child_process from 'child_process'

export default class Serve extends BaseCommand {
  static description = 'Run CMS on firebase emulators. \n some functionality may not running as expected because emulator is not perfect.'

  static flags = {
    help: flags.help({char: 'h'}),
    "init": flags.boolean({ char: "i", description: "init emulator" }),
  }

  static args = []

  async run() {
    const {args, flags} = this.parse(Serve)
    // init if specified
    if (flags.init) {
      child_process.execFileSync('firebase', ['init', 'emulators'], {stdio: 'inherit'});
    }
    // start emulator
    shell.exec('firebase emulators:start');
  }
}
