import fs from 'fs';

const parse = (path) => JSON.parse(fs.readFileSync(path, 'utf8'));

export default parse;
