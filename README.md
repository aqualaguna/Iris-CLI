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
$ npm install -g Iris-CLI
$ iris COMMAND
running command...
$ iris (-v|--version|version)
Iris-CLI/1.0.0 linux-x64 node-v12.20.0
$ iris --help [COMMAND]
USAGE
  $ iris COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`iris build`](#iris-build)
* [`iris clear:cache [FILE]`](#iris-clearcache-file)
* [`iris create NAME`](#iris-create-name)
* [`iris create:test [FILE]`](#iris-createtest-file)
* [`iris deploy [FILE]`](#iris-deploy-file)
* [`iris help [COMMAND]`](#iris-help-command)
* [`iris init [FILE]`](#iris-init-file)
* [`iris init:user [FILE]`](#iris-inituser-file)
* [`iris install`](#iris-install)
* [`iris serve [FILE]`](#iris-serve-file)
* [`iris test [FILE]`](#iris-test-file)
* [`iris update [FILE]`](#iris-update-file)

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

## `iris clear:cache [FILE]`

Clear Download Cache

```
USAGE
  $ iris clear:cache [FILE]

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

## `iris create:test [FILE]`

describe the command here

```
USAGE
  $ iris create:test [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/create/test.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/create/test.ts)_

## `iris deploy [FILE]`

describe the command here

```
USAGE
  $ iris deploy [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
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
  -b, --no-build    Do not build
  -d, --no-deploy   Do not deploy to firebase
  -h, --help        show CLI help
  -i, --no-install  Do not install

DESCRIPTION
  its just multiple command 'install', 'build, 'firebase deploy', & init functions call
```

_See code: [src/commands/init.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/init.ts)_

## `iris init:user [FILE]`

describe the command here

```
USAGE
  $ iris init:user [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
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

## `iris serve [FILE]`

describe the command here

```
USAGE
  $ iris serve [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/serve.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/serve.ts)_

## `iris test [FILE]`

describe the command here

```
USAGE
  $ iris test [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/test.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/test.ts)_

## `iris update [FILE]`

describe the command here

```
USAGE
  $ iris update [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/update.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/update.ts)_
<!-- commandsstop -->
