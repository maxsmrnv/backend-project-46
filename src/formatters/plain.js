import _ from 'lodash';

const getStringValue = (value) => `'${value}'`;

const getValue = (value) => {
  if (_.isObject(value)) return '[complex value]';
  return typeof value === 'string' ? getStringValue(value) : value;
};

function makeAddedRecord(value, path) {
  return `Property '${path.join('.')}' was added with value: ${getValue(value)}`;
}

function makeRemovedRecord(path) {
  return `Property '${path.join('.')}' was removed`;
}
function makeUpdatedRecord(prevValue, newValue, path) {
  return `Property '${path.join('.')}' was updated. From ${getValue(prevValue)} to ${getValue(newValue)}`;
}

const iter = (diffTree, path = []) => diffTree.flatMap((node) => {
  const newPath = [...path, node.key];
  switch (node.type) {
    case 'added':
      return makeAddedRecord(node.value, newPath);
    case 'removed':
      return makeRemovedRecord(newPath);
    case 'updated':
      return makeUpdatedRecord(node.prevValue, node.value, newPath);
    case 'nested':
      return iter(node.children, newPath);
    case 'unchanged':
    default:
      return [];
  }
});
const formatDiff = (diff) => iter(diff).join('\n');

export default formatDiff;
