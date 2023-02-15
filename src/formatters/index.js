import formatAsStylish from './stylish.js';
import formatAsPlain from './plain.js';
import formatAsJson from './json.js';

const format = (diff, formatName) => {
  switch (formatName) {
    case 'stylish':
      return formatAsStylish(diff);
    case 'plain':
      return formatAsPlain(diff);
    case 'json':
      return formatAsJson(diff);
    default:
      throw new Error(`${formatName} is not supported`);
  }
};

export default format;
