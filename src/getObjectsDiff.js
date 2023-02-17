import isDefined from './utils/isDefined.js';
import uniq from './utils/uniq.js';
import isObject from './utils/isObject.js';

const getFormattedValue = (maybeObjectValue) => {
  if (!isObject(maybeObjectValue)) return maybeObjectValue;
  const entries = Object.entries(maybeObjectValue).sort();
  return entries.reduce((acc, [key, value]) => {
    acc.push({ key, value: isObject(value) ? getFormattedValue(value) : value });
    return acc;
  }, []);
};

function getObjectsDiff(obj1, obj2) {
  return uniq(Object.keys(obj1), Object.keys(obj2)).sort().reduce((acc, next) => {
    const left = obj1[next];
    const right = obj2[next];

    switch (true) {
      case (isObject(left) && isObject(right)): {
        acc.push({ key: next, value: getObjectsDiff(left, right) });
        break;
      }
      case (left === right): {
        acc.push({ key: next, value: left });
        break;
      }
      default:
        if (isDefined(left)) acc.push({ key: next, value: getFormattedValue(left), left: true });
        if (isDefined(right)) acc.push({ key: next, value: getFormattedValue(right), right: true });
    }
    return acc;
  }, []);
}
export default getObjectsDiff;
