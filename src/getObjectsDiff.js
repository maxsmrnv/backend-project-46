import isDefined from './utils/isDefined.js';
import uniq from './utils/uniq.js';

function getObjectsDiff(obj1, obj2) {
  return uniq(Object.keys(obj1), Object.keys(obj2)).sort().reduce((acc, next) => {
    const left = obj1[next];
    const right = obj2[next];

    switch (true) {
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
