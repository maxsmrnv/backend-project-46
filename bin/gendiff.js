#!/usr/bin/env node
const { program } = require('commander');

program
  .name('gendiff')
  .usage('[options] <filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .parse();

const options = program.opts();

if (options.help) program.help();
