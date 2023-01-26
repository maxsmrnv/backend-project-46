import fs from 'fs';

const parse = (path) => {
  let result = {};
  try {
    result = JSON.parse(fs.readFileSync(path, 'utf8'));
  } catch (e) {
    console.error(e);
  }
  return result;
};

export default parse;
