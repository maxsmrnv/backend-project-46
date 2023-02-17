const getStringValue = (value) => `'${value}'`;

const getValue = (value) => {
  if (Array.isArray(value)) return '[complex value]';
  return typeof value === 'string' ? getStringValue(value) : value;
};

function makeAddedRecord(prop, value) {
  return `Property '${prop.join('.')}' was added with value: ${getValue(value)}`;
}
function makeUpdatedRecord(prop, prevValue, newValue) {
  return `Property '${prop.join('.')}' was updated. From ${getValue(prevValue)} to ${getValue(newValue)}`;
}
function makeRemovedRecord(prop) {
  return `Property '${prop.join('.')}' was removed`;
}

const iter = (diff, path = []) => {
  let prev = {};

  return diff.reduce((acc, next) => {
    switch (true) {
      case (next.right): {
        if (prev.key === next.key) {
          acc.push(makeUpdatedRecord([...path, next.key], prev.value, next.value));
        } else {
          if (prev.key) acc.push(makeRemovedRecord([...path, prev.key]));
          acc.push(makeAddedRecord([...path, next.key], next.value));
        }
        prev = {};
        break;
      }
      case (next.left): {
        if (prev.key) acc.push(makeRemovedRecord([...path, prev.key]));
        prev = next;
        break;
      }
      default: {
        if (Array.isArray(next.value)) {
          acc.push(...iter(next.value, [...path, next.key]));
        }
      }
    }
    return acc;
  }, []);
};
const formatDiff = (diff) => iter(diff).join('\n');

export default formatDiff;
