const iter = (diffTree) => diffTree.reduce((acc, next) => {
  const {
    children, key, type, ...props
  } = next;
  if (children) return { ...acc, [key]: { value: iter(next.children), type } };
  return { ...acc, [key]: { ...props, type } };
}, {});
const formatDiff = (diff) => JSON.stringify(iter(diff));

export default formatDiff;
