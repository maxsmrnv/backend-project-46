import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import formatDiff from '../formatters/stylish.js';
import DIFF from '../../__fixtures__/diff.js';

const DIFF_STYLISH = fs.readFileSync(path.join(process.cwd(), '__fixtures__', 'diffStylish.txt'), 'utf-8');

test('format diff as stylish', () => {
  expect(formatDiff(DIFF)).toEqual(DIFF_STYLISH);
});
