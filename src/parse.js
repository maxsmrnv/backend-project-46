import parseYml from './parsers/yaml.js';
import parseJson from './parsers/json.js';

const YAML_VALID_EXT = ['yaml', 'yml'];
const JSON_VALID_EXT = ['json'];
function parse(filePath) {
  const ext = filePath.split('.').at(-1);
  switch (true) {
    case YAML_VALID_EXT.includes(ext): {
      return parseYml(filePath);
    }
    case JSON_VALID_EXT.includes(ext): {
      return parseJson(filePath);
    }
    default: {
      throw new Error(`Unknown file extension: ${ext}`);
    }
  }
}

export default parse;
