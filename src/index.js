import path, { isAbsolute } from 'path';
import getDiffTree from './getDiffTree.js';
import parse from './parsers/index.js';
import format from './formatters/index.js';

function getAbsolutePath(filePath) {
  return (isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath));
}

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const absolutePath1 = getAbsolutePath(filepath1);
  const absolutePath2 = getAbsolutePath(filepath2);

  const diff = getDiffTree(parse(absolutePath1), parse(absolutePath2));

  const formatted = format(diff, formatName);

  console.log(formatted);
  return formatted;
};
export default genDiff;
