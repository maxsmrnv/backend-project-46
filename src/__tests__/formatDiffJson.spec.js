import { test, expect } from '@jest/globals';
import formatDiff from '../formatters/json.js';
import DIFF from '../../__fixtures__/diff.js';
import DIFF_JSON from '../../__fixtures__/diffJson.js';

test('format diff as json', () => {
  expect(formatDiff(DIFF)).toEqual(DIFF_JSON);
});
