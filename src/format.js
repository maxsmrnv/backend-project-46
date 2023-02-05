import formatAsObject from './formatters/json.js';
import formatAsPlain from './formatters/plain.js';

const format = (diff, formatName) => {
  switch (formatName) {
    case 'json':
      return formatAsObject(diff);
    case 'plain': {
      return formatAsPlain(diff);
    }
    default:
      throw new Error(`${formatName} is not supported`);
  }
};

export default format;
