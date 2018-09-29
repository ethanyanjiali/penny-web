import { browserHistory } from 'react-router';
import * as types from './CommonActionTypes';
import CommonApi from './CommonApi';
import { parse } from '../utils/error';

export const submitFeedback = feedback => (dispatch) => {
  dispatch({
    type: types.COMMON_SUBMITFEEDBACK_START,
  });

  return CommonApi.submitFeedback(feedback)
    .then((feedback) => {
      dispatch({
        type: types.COMMON_SUBMITFEEDBACK_SUCCESS,
        payload: {
          feedback,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: types.COMMON_SUBMITFEEDBACK_ERROR,
        payload: {
          error: parse(error),
        },
      });
      return error;
    });
};
