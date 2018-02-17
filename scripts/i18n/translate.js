import flatten from 'flat';
import _ from 'lodash';
import * as messages from './messages';

const a = _.reduce(flatten(messages), (result, key) => {
    if (typeof key == 'string' && key.startsWith('app.')) {
        result[key] = '';
    }
    return result;
}, {});
console.log(a);
