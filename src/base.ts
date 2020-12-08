// src/base.ts
import Command, {flags} from '@oclif/command'
import checkBasicRequirement from './helper/check-basic-requirement';

export default abstract class BaseCommand extends Command {

  async init() {
    super.init();
    await checkBasicRequirement();
  }
}