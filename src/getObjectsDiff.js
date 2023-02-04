import isDefined from './utils/isDefined.js';
import uniq from './utils/uniq.js';
import isObject from './utils/isObject.js';

const objectToKeyValue = (obj) => {
  const entries = Object.entries(obj);
  return entries.reduce((acc, [key, value]) => {
    acc.push({ key, value: isObject(value) ? objectToKeyValue(value) : value });
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
      case (isObject(left)): {
        acc.push({ key: next, value: objectToKeyValue(left), left: true });
        if (isDefined((right))) acc.push({ key: next, value: right, right: true });
        break;
      }
      case (isObject(right)): {
        acc.push({ key: next, value: objectToKeyValue(right), right: true });
        if (isDefined((left))) acc.push({ key: next, value: left, left: true });
        break;
      }
      case (left === right): {
        acc.push({ key: next, value: left });
        break;
      }
      case (isDefined(left) && isDefined(right)): {
        acc.push({ key: next, value: left, left: true }, { key: next, value: right, right: true });
        break;
      }
      case (isDefined(left)): {
        acc.push({ key: next, value: left, left: true });
        break;
      }
      default:
        acc.push({ key: next, value: right, right: true });
    }
    return acc;
  }, []);
}
export default getObjectsDiff;
