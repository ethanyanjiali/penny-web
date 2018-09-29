import * as types from './CommonActionTypes';

const initialState = {
  isSubmittingFeedback: false,
  submitFeedbackError: null,
  receivedFeedback: null,
};

export default function common(state = initialState, action) {
  const { feedback, error } = (action.payload || {});

  switch (action.type) {
    case types.COMMON_SUBMITFEEDBACK_START:
      return Object.assign({}, state, {
		        isSubmittingFeedback: true,
		        submitFeedbackError: null,
		        receivedFeedback: null,
		    });
    case types.COMMON_SUBMITFEEDBACK_SUCCESS:
      return Object.assign({}, state, {
		        isSubmittingFeedback: false,
		        submitFeedbackError: null,
		        receivedFeedback: feedback,
		    });
    case types.COMMON_SUBMITFEEDBACK_ERROR:
      return Object.assign({}, state, {
		        isSubmittingFeedback: false,
		        submitFeedbackError: error,
		        receivedFeedback: null,
		    });
    default:
      return state;
  }
}
