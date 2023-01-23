import isDefined from './utils/isDefined.js';

const getObjectsDiff = (obj1, obj2) => {
  const sortedSet = new Set([...Object.keys(obj1), ...Object.keys(obj2)].sort());

  return [...sortedSet].reduce((acc, next) => {
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
      case (isDefined(right)): {
        acc.push({ key: next, value: right, right: true });
        break;
      }
      default:
        break;
    }
    return acc;
  }, []);
};
export default getObjectsDiff;
