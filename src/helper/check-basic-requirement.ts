import * as shell from 'shelljs'
import * as semver from 'semver'


export default async function checkBasicRequirement() {
  if (!shell.which('firebase')) {
    throw new Error('Firebase CLI is not available.')
  }
  // check if firebase is login
  const temp = shell.exec('firebase login --interactive', { silent: true })
  if (!temp.trim().match(/Already logged in as/)) {
    throw new Error('Firebase CLI is not authenticated.' + temp)
  }
  // check firebase version
  const version = shell.exec('firebase -V --non-interactive', { silent: true });
  if (!semver.gte(version.toString(), '8.16.2')) {
    throw new Error('Firebase CLI Min Version 8.16.2 ');
  }
  
}
