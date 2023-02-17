import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import formatDiff from '../formatters/plain.js';
import DIFF from '../../__fixtures__/diff.js';

const DIFF_PLAIN = fs.readFileSync(path.join(process.cwd(), '__fixtures__', 'diffPlain.txt'), 'utf-8');

test('format diff as plain', () => {
  expect(formatDiff(DIFF)).toEqual(DIFF_PLAIN);
});
