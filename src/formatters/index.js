import formatAsStylish from './stylish.js';
import formatAsPlain from './plain.js';

const format = (diff, formatName) => {
  switch (formatName) {
    case 'stylish':
      return formatAsStylish(diff);
    case 'plain': {
      return formatAsPlain(diff);
    }
    default:
      throw new Error(`${formatName} is not supported`);
  }
};

export default format;
