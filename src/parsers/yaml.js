import * as jsyaml from 'js-yaml';
import fs from 'fs';

const parse = (path) => {
  let result = {};
  try {
    result = jsyaml.load(fs.readFileSync(path, 'utf8'));
  } catch (e) {
    console.error(e);
  }
  return result;
};

export default parse;
