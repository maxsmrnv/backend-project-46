import { test, expect } from '@jest/globals';
import formatDiff from '../formatters/plain.js';
import DIFF from '../../__fixtures__/diff.js';

test('format diff as plain', () => {
  expect(formatDiff(DIFF)).toEqual('Property \'common.follow\' was added with value: false\n'
    + 'Property \'common.setting2\' was removed\n'
    + 'Property \'common.setting3\' was updated. From true to null\n'
    + 'Property \'common.setting4\' was added with value: \'blah blah\'\n'
    + 'Property \'common.setting5\' was added with value: [complex value]\n'
    + 'Property \'common.setting6.doge.wow\' was updated. From \'\' to \'so much\'\n'
    + 'Property \'common.setting6.ops\' was added with value: \'ops\'\n'
    + 'Property \'group1.baz\' was updated. From \'bas\' to \'bars\'\n'
    + 'Property \'group1.nest\' was updated. From [complex value] to \'str\'\n'
    + 'Property \'group2\' was removed\n'
    + 'Property \'group3\' was updated. From \'simple\' to [complex value]');
});
