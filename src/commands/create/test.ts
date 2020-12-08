import {Command, flags} from '@oclif/command'

export default class CreateTest extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(CreateTest)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from /home/ricardo/Documents/my-project/Iris-CLI/src/commands/create/test.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }

  async catch(error: any) {
    // do something or
    this.log(error)
    // re-throw to be handled globally
    throw error
  }
}
