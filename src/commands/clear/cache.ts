import {Command, flags} from '@oclif/command'
var rimraf = require("rimraf");

export default class ClearCache extends Command {
  static description = 'Clear Download Cache'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = []

  async run() {
    const {args, flags} = this.parse(ClearCache)
    let tis = this;
    rimraf(this.config.cacheDir + '/**',function(err: any) {
      if (err) tis.error(err);
      else tis.log("Successfully deleted all cache.");
      // tis.exit(0);
    })
    
  }
}
