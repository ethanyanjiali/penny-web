import { combineReducers } from 'redux';
import EventReducer from './event/EventReducer';

export default combineReducers({
	event: EventReducer
});