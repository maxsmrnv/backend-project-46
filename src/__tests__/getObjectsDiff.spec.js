import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import getObjectsDiff from '../getObjectsDiff.js';
import DIFF from '../../__fixtures__/diff.js';

const readFromFixtures = (file) => JSON.parse(fs.readFileSync(path.join(process.cwd(), '__fixtures__', file), 'utf-8'));

test('getObjectsDiff', () => {
  expect(getObjectsDiff(readFromFixtures('file1.json'), readFromFixtures('file2.json'))).toEqual(DIFF);
});
