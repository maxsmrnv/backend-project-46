const FORMAT_INDENT = 4;

const getSymbol = (diffRecord, deep = 0) => {
  switch (true) {
    case diffRecord.left:
      return `${' '.repeat(FORMAT_INDENT * deep)}  - `;
    case diffRecord.right:
      return `${' '.repeat(FORMAT_INDENT * deep)}  + `;
    default:
      return ' '.repeat(FORMAT_INDENT * (deep + 1));
  }
};

const formatDiffRecord = (record, deep = 0) => {
  const hasChildren = Array.isArray(record.value);
  const formattedKey = `${getSymbol(record, deep)}${record.key}`;

  if (hasChildren) {
    return [
      `${formattedKey}: {`,
      ...record.value.flatMap((child) => formatDiffRecord(child, deep + 1)),
      `${getSymbol({}, deep)}}`,
    ];
  }
  return `${formattedKey}: ${record.value}`;
};

const formatDiff = (diff) => [
  '{',
  ...diff.flatMap((diffRecord) => formatDiffRecord(diffRecord)),
  '}',
].join('\n');

export default formatDiff;
