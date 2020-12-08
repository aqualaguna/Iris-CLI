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
Iris-CLI/1.0.0 linux-x64 node-v12.19.0
$ iris --help [COMMAND]
USAGE
  $ iris COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`iris create [FILE]`](#iris-create-file)
* [`iris create:test [FILE]`](#iris-createtest-file)
* [`iris goodbye [FILE]`](#iris-goodbye-file)
* [`iris hello [FILE]`](#iris-hello-file)
* [`iris help [COMMAND]`](#iris-help-command)

## `iris create [FILE]`

describe the command here

```
USAGE
  $ iris create [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/create.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/create.ts)_

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

## `iris goodbye [FILE]`

describe the command here

```
USAGE
  $ iris goodbye [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/goodbye.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/goodbye.ts)_

## `iris hello [FILE]`

describe the command here

```
USAGE
  $ iris hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ iris hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/aqualaguna/Iris-CLI/blob/v1.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
