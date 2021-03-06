@fab/static
===========

Compile static-site projects into FABs

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@fab/static.svg)](https://npmjs.org/package/@fab/static)
[![Downloads/week](https://img.shields.io/npm/dw/@fab/static.svg)](https://npmjs.org/package/@fab/static)
[![License](https://img.shields.io/npm/l/@fab/static.svg)](https://github.com/fab-spec/fab/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @fab/static
$ fab-static COMMAND
running command...
$ fab-static (-v|--version|version)
@fab/static/0.0.0 linux-x64 node-v11.2.0
$ fab-static --help [COMMAND]
USAGE
  $ fab-static COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fab-static hello [FILE]`](#fab-static-hello-file)
* [`fab-static help [COMMAND]`](#fab-static-help-command)

## `fab-static hello [FILE]`

describe the command here

```
USAGE
  $ fab-static hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ fab-static hello
  hello world from ./src/build.ts!
```

_See code: [src/commands/build.ts](https://github.com/fab-spec/fab/blob/v0.0.0/src/commands/hello.ts)_

## `fab-static help [COMMAND]`

display help for fab-static

```
USAGE
  $ fab-static help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.3/src/commands/help.ts)_
<!-- commandsstop -->
