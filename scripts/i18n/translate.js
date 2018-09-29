import flatten from 'flat'
import _ from 'lodash';
import { messages } from './messages';

const a = _.reduce(flatten(messages), (result, value, key) => {
    if (key.includes('defaultMessage')) {
        result[key] = value;
    }
    return result;
}, {});
console.log(a);
