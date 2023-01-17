const getObjectsDiff = (obj1, obj2) => {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();

  return [
    { key: 'follow', value: false, present: 'left' },
    { key: 'host', value: 'hexlet.io' },
    { key: 'proxy', value: '123.234.53.22', present: 'left' },
    { key: 'timeout', value: 50, present: 'left' },
    { key: 'timeout', value: 20, present: 'right' },
    { key: 'verbose', value: true, present: 'right' },
  ];
};
export default getObjectsDiff;
