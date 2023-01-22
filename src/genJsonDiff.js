import fs from 'fs';
import path, { isAbsolute } from 'path';
import getObjectsDiff from './getObjectsDiff.js';
import formatDiff from './formatDiff.js';

function getAbsolutePath(filePath) {
  return (isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath));
}

const genJsonDiff = (filepath1, filepath2) => {
  const absolutePath1 = getAbsolutePath(filepath1);
  const absolutePath2 = getAbsolutePath(filepath2);
  const res = fs.readFileSync(absolutePath1);
  const res2 = fs.readFileSync(absolutePath2);

  console.log('DIFF:');
  console.log(formatDiff(getObjectsDiff(JSON.parse(res), JSON.parse(res2))));
};
export default genJsonDiff;
