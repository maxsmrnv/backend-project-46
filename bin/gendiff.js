#!/usr/bin/env node

import { program } from 'commander';
import genJsonDiff from '../src/genJsonDiff.js';

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .usage('[options] <filepath1> <filepath2>')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .action((str, options) => {
    const [filepath1, filepath2] = options.args;
    if (!filepath1 || !filepath2) throw new Error('no files provide');
    genJsonDiff(filepath1, filepath2);
  })
  .parse();

const options = program.opts();

if (options.help) program.help();
