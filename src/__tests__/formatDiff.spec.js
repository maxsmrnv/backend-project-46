import { test, expect } from '@jest/globals';
import formatDiff from '../diffFormatters/object.js';

const DIFF = [
  {
    key: 'common',
    value: [
      { key: 'follow', value: false, right: true },
      { key: 'setting1', value: 'Value 1' },
      { key: 'setting2', value: 200, left: true },
      { key: 'setting3', value: true, left: true },
      { key: 'setting3', value: null, right: true },
      { key: 'setting4', value: 'blah blah', right: true },
      {
        key: 'setting5',
        value: [{ key: 'key5', value: 'value5' }],
        right: true,
      },
      {
        key: 'setting6',
        value: [
          {
            key: 'doge',
            value: [
              { key: 'wow', value: '', left: true },
              { key: 'wow', value: 'so much', right: true },
            ],
          },
          { key: 'key', value: 'value' },
          { key: 'ops', value: 'vops', right: true },
        ],
      },
    ],
  },
  {
    key: 'group1',
    value: [
      { key: 'baz', value: 'bas', left: true },
      { key: 'baz', value: 'bars', right: true },
      { key: 'foo', value: 'bar' },
      {
        key: 'nest',
        value: [
          { key: 'key', value: 'value' },
        ],
        left: true,
      },
      {
        key: 'nest',
        value: 'str',
        right: true,
      },
    ],
  },
  {
    key: 'group2',
    value: [
      { key: 'abc', value: 12345 },
      {
        key: 'deep',
        value: [
          { key: 'id', value: 45 },
        ],
      },
    ],
    left: true,
  },
  {
    key: 'group3',
    value: [
      {
        key: 'deep',
        value: [
          {
            key: 'id',
            value: [
              { key: 'number', value: 45 },
            ],
          },
        ],
      },
      { key: 'fee', value: 100500 },

    ],
    right: true,
  },
];

test('getObjectsDiff', () => {
  expect(formatDiff(DIFF)).toEqual('{\n'
    + '    common: {\n'
    + '      + follow: false\n'
    + '        setting1: Value 1\n'
    + '      - setting2: 200\n'
    + '      - setting3: true\n'
    + '      + setting3: null\n'
    + '      + setting4: blah blah\n'
    + '      + setting5: {\n'
    + '            key5: value5\n'
    + '        }\n'
    + '        setting6: {\n'
    + '            doge: {\n'
    + '              - wow: \n'
    + '              + wow: so much\n'
    + '            }\n'
    + '            key: value\n'
    + '          + ops: vops\n'
    + '        }\n'
    + '    }\n'
    + '    group1: {\n'
    + '      - baz: bas\n'
    + '      + baz: bars\n'
    + '        foo: bar\n'
    + '      - nest: {\n'
    + '            key: value\n'
    + '        }\n'
    + '      + nest: str\n'
    + '    }\n'
    + '  - group2: {\n'
    + '        abc: 12345\n'
    + '        deep: {\n'
    + '            id: 45\n'
    + '        }\n'
    + '    }\n'
    + '  + group3: {\n'
    + '        deep: {\n'
    + '            id: {\n'
    + '                number: 45\n'
    + '            }\n'
    + '        }\n'
    + '        fee: 100500\n'
    + '    }\n'
    + '}');
});
