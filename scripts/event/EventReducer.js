import * as types from './EventActionTypes';

const initialState = {
	currentEvent: null,
	isLoadingEvent: false,
	isCreatingEvent: false,
	isAddingExpense: false,
	isUpdatingEvent: false,
    updatingExpenseCount: null,
	deletingExpenseCount: null,
	eventGetError: null,
	addExpenseError: null,
	eventCreateError: null,
    updateExpenseError: null,
	deleteExpenseError: null
};

export default function event (state = initialState, action) {
	const { event, error, count } = (action.payload || {});

	switch (action.type) {
		case types.EVENT_GET_START:
			return Object.assign({}, state, {
		        isLoadingEvent: true,
		        eventGetError: null,
		        currentEvent: null
		    });
		case types.EVENT_GET_SUCCESS:
			return Object.assign({}, state, {
		        isLoadingEvent: false,
		        eventGetError: null,
		        currentEvent: event
		    });
		case types.EVENT_GET_ERROR:
			return Object.assign({}, state, {
		        isLoadingEvent: false,
		        eventGetError: error,
		        currentEvent: null
		    });
		case types.EVENT_CREATE_START:
			return Object.assign({}, state, {
		        isCreatingEvent: true,
		        eventCreateError: null,
		        currentEvent: null
		    });
		case types.EVENT_CREATE_SUCCESS:
			return Object.assign({}, state, {
		        isCreatingEvent: false,
		        eventCreateError: null,
		        currentEvent: event
		    });
		case types.EVENT_CREATE_ERROR:
			return Object.assign({}, state, {
		        isCreatingEvent: false,
		        eventCreateError: error,
		        currentEvent: null
		    });
		case types.EVENT_ADDEXPENSE_START:
			return Object.assign({}, state, {
		        isAddingExpense: true,
		        addExpenseError: null
		    });
		case types.EVENT_ADDEXPENSE_SUCCESS:
			return Object.assign({}, state, {
		        isAddingExpense: false,
		        addExpenseError: null,
		        currentEvent: event
		    });
		case types.EVENT_ADDEXPENSE_ERROR:
			return Object.assign({}, state, {
		        isAddingExpense: false,
		        addExpenseError: error
		    });
        case types.EVENT_UPDATEEXPENSE_START:
            return Object.assign({}, state, {
                updatingExpenseCount: count,
                updateExpenseError: null,
                updateExpenseErrorCount: null,
            });
        case types.EVENT_UPDATEEXPENSE_SUCCESS:
            return Object.assign({}, state, {
                updatingExpenseCount: null,
                updateExpenseError: null,
                currentEvent: event
            });
        case types.EVENT_UPDATEEXPENSE_ERROR:
            return Object.assign({}, state, {
                updatingExpenseCount: null,
                updateExpenseError: error,
                updateExpenseErrorCount: count,
            });
		case types.EVENT_DELETEEXPENSE_START:
			return Object.assign({}, state, {
		        deletingExpenseCount: count,
		        deleteExpenseError: null,
                deleteExpenseErrorCount: null,
		    });
		case types.EVENT_DELETEEXPENSE_SUCCESS:
			return Object.assign({}, state, {
		        deletingExpenseCount: null,
		        deleteExpenseError: null,
		        currentEvent: event
		    });
		case types.EVENT_DELETEEXPENSE_ERROR:
			return Object.assign({}, state, {
		        deletingExpenseCount: null,
		        deleteExpenseError: error,
                deleteExpenseErrorCount: count,
		    });
		
		case types.EVENT_UPDATE_START:
			return Object.assign({}, state, {
		        isUpdatingEvent: true,
		        eventUpdateError: null
		    });
		case types.EVENT_UPDATE_SUCCESS:
			return Object.assign({}, state, {
		        isUpdatingEvent: false,
		        eventUpdateError: null,
		        currentEvent: event
		    });
		case types.EVENT_UPDATE_ERROR:
			return Object.assign({}, state, {
		        isUpdatingEvent: false,
		        eventUpdateError: error
		    });
		default:
			return state;
	}
}