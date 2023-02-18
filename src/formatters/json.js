const iter = (diffTree) => diffTree.reduce((jsonTree, node) => {
  switch (node.type) {
    case 'nested':
      return { ...jsonTree, [node.key]: { value: iter(node.children), type: 'nested' } };
    case 'updated':
      return { ...jsonTree, [node.key]: { prevValue: node.prevValue, value: node.value, type: 'updated' } };
    case 'unchanged':
    case 'removed':
    case 'added':
    default:
      return { ...jsonTree, [node.key]: { value: node.value, type: node.type } };
  }
}, {});
const formatDiff = (diff) => JSON.stringify(iter(diff));

export default formatDiff;
