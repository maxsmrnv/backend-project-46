/*
 {
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
*/

const getSymbol = (diffRecord) => {
  switch (true) {
    case diffRecord.left:
      return '-';
    case diffRecord.right:
      return '+';
    default:
      return ' ';
  }
};

const formatDiff = (diff) => [
  '{',
  ...diff.map((el) => `  ${getSymbol(el)} ${el.key}: ${el.value}`),
  '}',
].join('\n');

export default formatDiff;
