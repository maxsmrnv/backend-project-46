import _ from 'lodash';

function getDiffTree(obj1, obj2) {
  const keys = _.orderBy(_.union(_.keys(obj1), _.keys(obj2)));
  return keys.map((key) => {
    const prevValue = obj1[key];
    const value = obj2[key];

    switch (true) {
      case (_.has(obj1, key) && !_.has(obj2, key)):
        return { key, value: prevValue, type: 'removed' };
      case (!_.has(obj1, key) && _.has(obj2, key)):
        return { key, value, type: 'added' };
      case (_.isObject(prevValue) && _.isObject(value)):
        return { key, children: getDiffTree(prevValue, value), type: 'nested' };
      case (prevValue !== value):
        return {
          key, prevValue, value, type: 'updated',
        };
      default:
        return { key, value, type: 'unchanged' };
    }
  });
}
export default getDiffTree;
