import * as types from './EventActionTypes';
import EventApi from './EventApi';
import { parse } from '../utils/error';
import { browserHistory } from 'react-router';

export const getEvent = eventId => {
	return dispatch => {
		dispatch({
			type: types.EVENT_GET_START
		});

		return EventApi.getEvent(eventId)
			.then(event => {
				dispatch({
					type: types.EVENT_GET_SUCCESS,
					payload: {
						event: event
					}
				});
			})
			.catch(error => {
				dispatch({
					type: types.EVENT_GET_ERROR,
					payload: {
						error: parse(error)
					}
				});
				return error;
			});
	};
};

export const createEvent = event => {
	return dispatch => {
		dispatch({
			type: types.EVENT_CREATE_START
		});

		return EventApi.createEvent(event)
			.then(event => {
				dispatch({
					type: types.EVENT_CREATE_SUCCESS,
					payload: {
						event: event
					}
				});
			})
			.catch(error => {
				dispatch({
					type: types.EVENT_CREATE_ERROR,
					payload: {
						error: parse(error)
					}
				});
				return error;
			});
	};
};

export const updateEvent = (event, eventId) => {
	return dispatch => {
		dispatch({
			type: types.EVENT_UPDATE_START
		});

		return EventApi.updateEvent(event, eventId)
			.then(event => {
				dispatch({
					type: types.EVENT_UPDATE_SUCCESS,
					payload: {
						event: event
					}
				});
			})
			.catch(error => {
				dispatch({
					type: types.EVENT_UPDATE_ERROR,
					payload: {
						error: parse(error)
					}
				});
				return error;
			});
	};
};

export const addExpense = (eventId, expense) => {
	return dispatch => {
		dispatch({
			type: types.EVENT_ADDEXPENSE_START
		});

		return EventApi.addExpense(eventId, expense)
			.then(event => {
				dispatch({
					type: types.EVENT_ADDEXPENSE_SUCCESS,
					payload: {
						event: event
					}
				});
			})
			.catch(error => {
				dispatch({
					type: types.EVENT_ADDEXPENSE_ERROR,
					payload: {
						error: parse(error)
					}
				});
				return error;
			});
	};
};

export const updateExpense = (eventId, expense, count, expenseId) => {
    return dispatch => {
        dispatch({
            type: types.EVENT_UPDATEEXPENSE_START,
            payload: {
                count: count
            }
        });

        return EventApi.updateExpense(eventId, expense, count, expenseId)
            .then(event => {
                dispatch({
                    type: types.EVENT_UPDATEEXPENSE_SUCCESS,
                    payload: {
                        event: event
                    }
                });
            })
            .catch(error => {
                dispatch({
                    type: types.EVENT_UPDATEEXPENSE_ERROR,
                    payload: {
                        error: parse(error),
                        count: count
                    }
                });
                return error;
            });
    };
};

export const deleteExpense = (eventId, count) => {
	return dispatch => {
		dispatch({
			type: types.EVENT_DELETEEXPENSE_START,
			payload: {
				count: count
			}
		});

		return EventApi.deleteExpense(eventId, count)
			.then(event => {
				dispatch({
					type: types.EVENT_DELETEEXPENSE_SUCCESS,
					payload: {
						event: event
					}
				});
			})
			.catch(error => {
				dispatch({
					type: types.EVENT_DELETEEXPENSE_ERROR,
					payload: {
						error: parse(error),
                        count: count
					}
				});
				return error;
			});
	};
};
