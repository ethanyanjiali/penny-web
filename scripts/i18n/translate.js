import flatten from 'flat';
import { reduce } from 'lodash';
import { messages } from './messages';

const a = reduce(flatten(messages), (result, value, key) => {
  if (key.includes('defaultMessage')) {
    result[key] = value;
  }
  return result;
}, {});
console.log(a);
