import getObjectsDiff from '../getObjectsDiff.js';

const obj1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

const obj2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};
test('getObjectsDiff', () => {
  expect(getObjectsDiff(obj1, obj2)).toEqual([
    { key: 'follow', value: false, present: 'left' },
    { key: 'host', value: 'hexlet.io' },
    { key: 'proxy', value: '123.234.53.22', present: 'left' },
    { key: 'timeout', value: 50, present: 'left' },
    { key: 'timeout', value: 20, present: 'right' },
    { key: 'verbose', value: true, present: 'right' },
  ]);
});
