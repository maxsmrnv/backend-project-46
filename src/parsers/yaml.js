import * as jsyaml from 'js-yaml';
import fs from 'fs';

const parse = (path) => jsyaml.load(fs.readFileSync(path, 'utf8'));

export default parse;
