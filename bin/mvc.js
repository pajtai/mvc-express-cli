#!/usr/bin/env node

'use strict';

const program = require('commander');

program
    .version('0.0.1')
    .command('controller <name> [type]', 'create a new controller named <name>.controller.js - default type is basic').alias('c')
    .parse(process.argv);

