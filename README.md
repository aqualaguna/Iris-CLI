Iris-CLI
========

Iris CMS CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/Iris-CLI.svg)](https://npmjs.org/package/Iris-CLI)
[![Downloads/week](https://img.shields.io/npm/dw/Iris-CLI.svg)](https://npmjs.org/package/Iris-CLI)
[![License](https://img.shields.io/npm/l/Iris-CLI.svg)](https://github.com/aqualaguna/Iris-CLI/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g iris-cli
$ iris COMMAND
running command...
$ iris (-v|--version|version)
iris-cli/1.0.0 linux-x64 node-v12.20.0
$ iris --help [COMMAND]
USAGE
  $ iris COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`iris autocomplete [SHELL]`](#iris-autocomplete-shell)
* [`iris build`](#iris-build)
* [`iris clear:cache`](#iris-clearcache)
* [`iris create NAME`](#iris-create-name)
* [`iris deploy [ARGS]`](#iris-deploy-args)
* [`iris help [COMMAND]`](#iris-help-command)
* [`iris init [FILE]`](#iris-init-file)
* [`iris init:user`](#iris-inituser)
* [`iris install`](#iris-install)
* [`iris serve`](#iris-serve)
* [`iris upgrade [VERSION]`](#iris-upgrade-version)

## `iris autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ iris autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ iris autocomplete
  $ iris autocomplete bash
  $ iris autocomplete zsh
  $ iris autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.2.0/src/commands/autocomplete/index.ts)_

## `iris build`

Build both functions, cms.

```
USAGE
  $ iris build

OPTIONS
  -h, --help              show CLI help
  --only=(functions|cms)  use this options if want run only one of them.

DESCRIPTION
  basically it call 'npm run build' on folder functions & cms. Just Syntax sugar if you call.
```

_See code: [src/commands/build.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/build.ts)_

## `iris clear:cache`

Clear Download Cache

```
USAGE
  $ iris clear:cache

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/clear/cache.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/clear/cache.ts)_

## `iris create NAME`

Create Iris Project

```
USAGE
  $ iris create NAME

ARGUMENTS
  NAME  [default: iris] Project Name to be created

OPTIONS
  -f, --force  make download from server.
  -h, --help   show CLI help
```

_See code: [src/commands/create/index.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/create/index.ts)_

## `iris deploy [ARGS]`

deploy to firebase.

```
USAGE
  $ iris deploy [ARGS]

OPTIONS
  -h, --help  show CLI help

DESCRIPTION
  syntax sugar to 'firebase deploy' with args
```

_See code: [src/commands/deploy.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/deploy.ts)_

## `iris help [COMMAND]`

display help for iris

```
USAGE
  $ iris help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `iris init [FILE]`

Init Iris CMS.

```
USAGE
  $ iris init [FILE]

OPTIONS
  -b, --no-build           Do not build
  -c, --no-init-call       Do not call init functions.
  -d, --no-deploy          Do not deploy to firebase
  -e, --email=email        Email to Register
  -h, --help               show CLI help
  -i, --no-install         Do not install
  -p, --password=password  Password to Register

DESCRIPTION
  its just multiple command 'install', 'build, 'firebase deploy', & 'init:user'
```

_See code: [src/commands/init/index.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/init/index.ts)_

## `iris init:user`

Init User for super admin.

```
USAGE
  $ iris init:user

OPTIONS
  -e, --email=email        Email to Register
  -h, --help               show CLI help
  -p, --password=password  Password to Register

DESCRIPTION
  this can be called once per project. second time will be ignored as success.
```

_See code: [src/commands/init/user.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/init/user.ts)_

## `iris install`

Install All dependency using yarn or npm.

```
USAGE
  $ iris install

OPTIONS
  -h, --help  show CLI help

DESCRIPTION
  syntax sugar for 'npm i' or 'yarn' on folder functions or cms.
```

_See code: [src/commands/install.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/install.ts)_

## `iris serve`

Run CMS on firebase emulators. 

```
USAGE
  $ iris serve

OPTIONS
  -h, --help  show CLI help
  -i, --init  init emulator

DESCRIPTION
  some functionality may not running as expected because emulator is not perfect.
```

_See code: [src/commands/serve.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/serve.ts)_

## `iris upgrade [VERSION]`

Upgrade your Iris version. 

```
USAGE
  $ iris upgrade [VERSION]

OPTIONS
  -h, --help  show CLI help

DESCRIPTION
  latest(default) if not specified.
```

_See code: [src/commands/upgrade.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/upgrade.ts)_
<!-- commandsstop -->
