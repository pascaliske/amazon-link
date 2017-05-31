#!/usr/bin/env node

import { name, version } from '../package.json';
import { Cli } from 'modern-cli';
import ConvertCommand from './lib/commands/convertcommand';

new Cli(name, version)
    .addCommands([
        new ConvertCommand()
    ])
    .run();
