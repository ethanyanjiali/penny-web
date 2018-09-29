import * as types from './UserActionTypes';

const initialState = {
  signUp: {
    isLoading: false,
    error: null,
  },
  login: {
    isLoading: false,
    error: null,
  },
  currentUser: {
    isLoading: false,
    isUpdating: false,
    user: null,
    error: null,
  },
  updateUser: {
    isLoading: false,
    error: null,
  },
  updatePassword: {
    isLoading: false,
    success: false,
    error: null,
  },
  resetEmail: {
    isSending: false,
    success: false,
    error: null,
  },
};

export default function user(state = initialState, action) {
  const { user, error } = (action.payload || {});

  switch (action.type) {
    case types.USER_LOGIN_START:
      return Object.assign({}, state, {
		        login: {
		        	isLoading: true,
		        	error: null,
		        },
		    });
    case types.USER_LOGIN_ERROR:
      return Object.assign({}, state, {
		        login: {
		        	isLoading: false,
		        	error,
		        },
		    });
    case types.USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
		        login: {
		        	isLoading: false,
		        	error: null,
		        },
		        currentUser: {
		        	isLoading: false,
		        	user,
		        	error: null,
		        },
		        updateUser: {
		        	error: false,
		        },
		        updatePassword: {
		        	error: false,
		        },
		    });
    case types.USER_SIGNUP_START:
      return Object.assign({}, state, {
		        signUp: {
		        	isLoading: true,
		        	error: null,
		        },
		    });
    case types.USER_SIGNUP_ERROR:
      return Object.assign({}, state, {
		        signUp: {
		        	isLoading: false,
		        	error,
		        },
		    });
    case types.USER_SIGNUP_SUCCESS:
      return Object.assign({}, state, {
		        signUp: {
		        	isLoading: false,
		        	error,
		        },
		        currentUser: {
		        	isLoading: false,
		        	user,
		        	error: null,
		        },
		    });
    case types.USER_LOGOUT_SUCCESS:
      return Object.assign({}, state, {
		        currentUser: {
		        	isLoading: false,
		        	user: null,
		        },
		    });
    case types.USER_INITIALIZE_START:
      return Object.assign({}, state, {
		        currentUser: {
		        	isLoading: true,
		        },
		        login: {
		        	error: null,
		        },
		    });
    case types.USER_INITIALIZE_SUCCESS:
      return Object.assign({}, state, {
		        currentUser: {
		        	isLoading: false,
		        	user,
		        },
		        login: {
		        	error: null,
		        },
		    });
    case types.USER_INITIALIZE_ERROR:
      return Object.assign({}, state, {
		        currentUser: {
		        	isLoading: false,
		        },
		        login: {
		        	error,
		        },
		    });
    case types.USER_UPDATE_START:
      return Object.assign({}, state, {
		        updateUser: {
		        	isLoading: true,
		        	error: null,
		        },
		    });
    case types.USER_UPDATE_SUCCESS:
      return Object.assign({}, state, {
		        updateUser: {
		        	isLoading: false,
		        	error: null,
		        },
		        currentUser: {
		        	user,
		        },
		    });
    case types.USER_UPDATE_ERROR:
      return Object.assign({}, state, {
		        updateUser: {
		        	isLoading: false,
		        	error,
		        },
		    });
    case types.USER_UPDATEPASSWORD_START:
      return Object.assign({}, state, {
		        updatePassword: {
		        	isLoading: true,
		        	success: false,
		        	error: null,
		        },
		        resetEmail: {
          error: null,
        },
		    });
    case types.USER_UPDATEPASSWORD_SUCCESS:
      return Object.assign({}, state, {
		        updatePassword: {
		        	isLoading: false,
		        	success: true,
		        	error: null,
		        },
		    });
    case types.USER_UPDATEPASSWORD_ERROR:
      return Object.assign({}, state, {
		        updatePassword: {
		        	isLoading: false,
		        	success: false,
		        	error,
		        },
		    });
    case types.USER_RESETEMAIL_START:
      return Object.assign({}, state, {
		        resetEmail: {
          isSending: true,
          success: false,
          error: null,
        },
        updatePassword: {
          error: null,
        },
		    });
    case types.USER_RESETEMAIL_SUCCESS:
      return Object.assign({}, state, {
		        resetEmail: {
          isSending: false,
          success: true,
          error: null,
        },
		    });
    case types.USER_RESETEMAIL_ERROR:
      return Object.assign({}, state, {
		        resetEmail: {
          isSending: false,
          success: false,
          error,
        },
		    });
    default:
      return state;
  }
}
