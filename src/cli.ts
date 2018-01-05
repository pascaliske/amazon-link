#!/usr/bin/env node

import * as pkg from '../package.json'
import { Cli } from 'modern-cli'
import { ConvertCommand } from './lib/commands/convertcommand'

const { name, version } = (<any>pkg)

new Cli(name, version)
    .addCommands([
        new ConvertCommand()
    ])
    .run()
