import path, { isAbsolute } from 'path';
import getObjectsDiff from './getObjectsDiff.js';
import formatDiff from './diffFormatters/object.js';
import parse from './parse.js';

function getAbsolutePath(filePath) {
  return (isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath));
}

const genDiff = (filepath1, filepath2) => {
  const absolutePath1 = getAbsolutePath(filepath1);
  const absolutePath2 = getAbsolutePath(filepath2);

  const diff = getObjectsDiff(parse(absolutePath1), parse(absolutePath2));

  console.log(formatDiff(diff));
};
export default genDiff;
