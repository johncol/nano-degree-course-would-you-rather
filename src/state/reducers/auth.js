import { AuthActionType } from '../actions/auth';

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
  const { username } = action.payload;
  const time = Date.now();
  return {
    username,
    time
  };
};

const loginFail = (state, action) => {
  const { error } = action.payload;
  return {
    error
  };
};

const logout = (state, action) => {
  return {};
};

export default authReducer;
