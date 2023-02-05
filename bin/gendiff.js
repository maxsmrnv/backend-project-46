#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .name('gendiff')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .usage('[options] <filepath1> <filepath2>')
  .option('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .action((str, options) => {
    const opts = program.opts();
    if (opts.help) program.help();

    const [filepath1, filepath2] = options.args;
    if (!filepath1 || !filepath2) throw new Error('no files provided');
    else genDiff(filepath1, filepath2, opts.format);
  })
  .parse();
