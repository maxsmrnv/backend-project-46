import { test, expect } from '@jest/globals';
import genDiff from '../index.js';
import DIFF from '../../__fixtures__/diffJson.js';

test('getObjectsDiff', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'json')).toEqual(DIFF);
});
