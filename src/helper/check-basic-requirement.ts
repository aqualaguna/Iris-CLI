import * as shell from 'shelljs'

export default async function checkBasicRequirement() {
  if (!shell.which('firebase')) {
    throw new Error('Firebase CLI is not available.')
  }
  // check if firebase is login
  const temp = shell.exec('firebase login --interactive', { silent: true })
  if (!temp.trim().match(/Already logged in as/)) {
    throw new Error('Firebase CLI is not authenticated.' + temp)
  }
}
