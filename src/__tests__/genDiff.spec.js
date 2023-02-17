import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import genDiff from '../index.js';
import DIFF_JSON from '../../__fixtures__/diffJson.js';
import DIFF_JSON_FROM_YML from '../../__fixtures__/jsonDiffFromYml.js';

const readFile = (file) => fs.readFileSync(path.join(process.cwd(), '__fixtures__', file), 'utf-8');

test('gen diff stylish', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'stylish')).toEqual(readFile('diffStylish.txt'));
});

test('gen diff plain', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain')).toEqual(readFile('diffPlain.txt'));
});

test('gen diff json', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'json')).toEqual(DIFF_JSON);
});

test('gen diff json from yml', () => {
  expect(genDiff('__fixtures__/file3.yaml', '__fixtures__/file4.yml', 'json')).toEqual(DIFF_JSON_FROM_YML);
});

test('unknown file extension throw error', () => {
  expect(() => genDiff('__fixtures__/file2.txt', '__fixtures__/file1.txt', 'json')).toThrow(new Error('Unknown file extension: txt'));
});

test('unknown diff format throw error', () => {
  expect(() => genDiff('__fixtures__/file3.yaml', '__fixtures__/file4.yml', 'hip-hop')).toThrow(new Error('hip-hop is not supported'));
});
