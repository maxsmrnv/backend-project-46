const keyValueToObject = (arr) => arr.reduce((acc, { key, value }) => {
  if (Array.isArray(value)) acc[key] = keyValueToObject(value);
  else acc[key] = value;
  return acc;
}, {});

const getValue = (value) => (Array.isArray(value) ? keyValueToObject(value) : value);

function makeAddedRecord(value) {
  return { value: getValue(value), type: 'added' };
}
function makeUpdatedRecord(prevValue, value) {
  return { prevValue: getValue(prevValue), value: getValue(value), type: 'updated' };
}
function makeRemovedRecord(value) {
  return { value: getValue(value), type: 'removed' };
}

const iter = (diff) => {
  let prev = {};

  return diff.reduce((acc, next) => {
    switch (true) {
      case (next.right): {
        if (prev.key === next.key) {
          acc[next.key] = makeUpdatedRecord(prev.value, next.value);
        } else {
          if (prev.key) acc[prev.key] = makeRemovedRecord(prev.value);
          acc[next.key] = makeAddedRecord(next.value);
        }
        prev = {};
        break;
      }
      case (next.left): {
        if (prev.key) acc[prev.key] = makeRemovedRecord(prev.value);
        prev = next;
        break;
      }
      default: {
        if (Array.isArray(next.value)) {
          acc[next.key] = { value: iter(next.value), type: 'nested' };
        }
      }
    }
    return acc;
  }, {});
};
const formatDiff = (diff) => JSON.stringify(iter(diff));

export default formatDiff;
