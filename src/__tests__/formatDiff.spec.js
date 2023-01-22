import formatDiff from '../formatDiff.js';

const diff = [
  { key: 'follow', value: false, left: true },
  { key: 'host', value: 'hexlet.io' },
  { key: 'proxy', value: '123.234.53.22', left: true },
  { key: 'timeout', value: 50, left: true },
  { key: 'timeout', value: 20, right: true },
  { key: 'verbose', value: true, right: true },
];

test('getObjectsDiff', () => {
  expect(formatDiff(diff)).toEqual('{\n'
    + '  - follow: false\n'
    + '    host: hexlet.io\n'
    + '  - proxy: 123.234.53.22\n'
    + '  - timeout: 50\n'
    + '  + timeout: 20\n'
    + '  + verbose: true\n'
    + '}');
});
