import { combineReducers } from 'redux';
import EventReducer from './event/EventReducer';
import CommonReducer from './common/CommonReducer';

export default combineReducers({
  event: EventReducer,
  common: CommonReducer,
});
