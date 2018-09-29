import { browserHistory } from 'react-router';
import * as types from './UserActionTypes';
import UserApi from './UserApi';
import { parse } from '../utils/error';

export const sendResetEmail = form => (dispatch) => {
  dispatch({
    type: types.USER_RESETEMAIL_START,
  });

  return UserApi.sendResetEmail(form)
    .then((_) => {
      dispatch({
        type: types.USER_RESETEMAIL_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.USER_RESETEMAIL_ERROR,
        payload: {
          error: parse(error),
        },
      });
      return error;
    });
};

export const updatePassword = form => (dispatch) => {
  dispatch({
    type: types.USER_UPDATEPASSWORD_START,
  });

  return UserApi.updatePassword(form)
    .then((_) => {
      dispatch({
        type: types.USER_UPDATEPASSWORD_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.USER_UPDATEPASSWORD_ERROR,
        payload: {
          error: parse(error),
        },
      });
      return error;
    });
};

export const updateUser = form => (dispatch) => {
  dispatch({
    type: types.USER_UPDATE_START,
  });

  return UserApi.updateUser(form)
    .then((user) => {
      dispatch({
        type: types.USER_UPDATE_SUCCESS,
        payload: {
          user,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: types.USER_UPDATE_ERROR,
        payload: {
          error: parse(error),
        },
      });
      return error;
    });
};

export const initializeUser = _ => (dispatch) => {
  dispatch({
    type: types.USER_INITIALIZE_START,
  });

  return UserApi.viewCurrentUser()
    .then((user) => {
      dispatch({
        type: types.USER_INITIALIZE_SUCCESS,
        payload: {
          user,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: types.USER_INITIALIZE_ERROR,
        payload: {
          error: parse(error),
        },
      });
      UserApi.logout();
      return error;
    });
};

export const logout = _ => (dispatch) => {
  UserApi.logout();
  dispatch({
    type: types.USER_LOGOUT_SUCCESS,
  });
};

export const login = form => (dispatch) => {
  dispatch({
    type: types.USER_LOGIN_START,
  });

  return UserApi.login(form)
    .then(_ => UserApi.viewCurrentUser())
    .then((user) => {
      dispatch({
        type: types.USER_LOGIN_SUCCESS,
        payload: {
          user,
        },
      });
      browserHistory.push('/user/account');
      return user;
    })
    .catch((error) => {
      dispatch({
        type: types.USER_LOGIN_ERROR,
        payload: {
          error: parse(error),
        },
      });
      return error;
    });
};

export const signUp = form => (dispatch) => {
  dispatch({
    type: types.USER_SIGNUP_START,
  });

  return UserApi.signUp(form)
    .then((user) => {
      dispatch({
        type: types.USER_SIGNUP_SUCCESS,
        payload: {
          user,
        },
      });
      browserHistory.push('/user/account');
      return user;
    })
    .then((_) => {
      UserApi.login({
        email: form.email,
        password: form.password,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.USER_SIGNUP_ERROR,
        payload: {
          error: parse(error),
        },
      });
    });
};
