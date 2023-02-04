const FORMAT_INDENT = 4;

const getSymbol = (diffRecord, depth = 0) => {
  switch (true) {
    case diffRecord.left:
      return `${' '.repeat(FORMAT_INDENT * depth)}  - `;
    case diffRecord.right:
      return `${' '.repeat(FORMAT_INDENT * depth)}  + `;
    default:
      return ' '.repeat(FORMAT_INDENT * (depth + 1));
  }
};

const formatDiffRecord = (record, depth = 0) => {
  const hasChildren = Array.isArray(record.value);
  const formattedKey = `${getSymbol(record, depth)}${record.key}`;

  if (hasChildren) {
    return [
      `${formattedKey}: {`,
      ...record.value.flatMap((child) => formatDiffRecord(child, depth + 1)),
      `${getSymbol({}, depth)}}`,
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
