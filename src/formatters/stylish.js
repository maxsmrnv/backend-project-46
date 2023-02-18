import _ from 'lodash';

const FORMAT_INDENT = 4;

const getEmptySymbol = (depth = 0) => ' '.repeat(FORMAT_INDENT * (depth + 1));
const getAddedSymbol = (depth = 0) => `${' '.repeat(FORMAT_INDENT * depth)}  + `;
const getRemovedSymbol = (depth = 0) => `${' '.repeat(FORMAT_INDENT * depth)}  - `;

const getSymbol = (type, depth) => {
  switch (type) {
    case 'added':
      return getAddedSymbol(depth);
    case 'removed':
      return getRemovedSymbol(depth);
    default:
      return getEmptySymbol(depth);
  }
};

const stringifyValue = (key, value, type, depth) => {
  const symbol = getSymbol(type, depth);

  if (_.isObject(value)) {
    const entries = Object.entries(value);
    return [
      `${symbol}${key}: {`,
      entries.flatMap(([childKey, child]) => stringifyValue(childKey, child, 'unchanged', depth + 1)),
      `${getEmptySymbol(depth)}}`,
    ].flat();
  }
  return [`${symbol}${key}: ${value}`];
};

const formatUpdatedNode = ({ key, value, prevValue }, depth) => {
  const removed = stringifyValue(key, prevValue, 'removed', depth);
  const added = stringifyValue(key, value, 'added', depth);
  return [...removed, ...added];
};

const formatNode = (node, depth = 0) => {
  const symbol = getSymbol(node.type, depth);

  switch (node.type) {
    case 'nested':
      return [
        `${symbol}${node.key}: {`,
        ...node.children.flatMap((nextNode) => formatNode(nextNode, depth + 1)),
        `${symbol}}`,
      ];
    case 'updated':
      return formatUpdatedNode(node, depth);
    default:
      return stringifyValue(node.key, node.value, node.type, depth);
  }
};

const formatDiff = (diffTree) => [
  '{',
  ...diffTree.flatMap((node) => formatNode(node)),
  '}',
].join('\n');

export default formatDiff;
