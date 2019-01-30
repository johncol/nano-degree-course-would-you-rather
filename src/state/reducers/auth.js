import { AuthActionType } from '../actions/action-types';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case AuthActionType.LOGIN_SUCCESS:
      return loginSuccess(state, action);

    case AuthActionType.LOGIN_FAIL:
      return loginFail(state, action);

    case AuthActionType.LOGOUT:
      return logout(state, action);

    default:
      return state;
  }
};

const loginSuccess = (state, action) => {
  const username = action.payload;
  const time = Date.now();
  return {
    logged: true,
    username,
    time
  };
};

const loginFail = (state, action) => {
  const error = action.payload;
  return {
    logged: false,
    error
  };
};

const logout = (state, action) => {
  return {
    logged: false
  };
};

export default authReducer;
