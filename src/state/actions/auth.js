import * as API from './../../api/_DATA';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';

const AuthActionCreator = {
  loginSuccess: username => ({
    type: LOGIN_SUCCESS,
    payload: {
      username
    }
  }),

  loginFail: error => ({
    type: LOGIN_FAIL,
    payload: {
      error
    }
  }),

  logout: () => ({
    type: LOGOUT
  })
};

const login = dispatch => (username, password) => {
  return API._login(username, password)
    .then(user => {
      dispatch(AuthActionCreator.loginSuccess(user.id));
    })
    .catch(error => {
      dispatch(AuthActionCreator.loginFail(error.message));
    });
};

const logout = dispatch => () => dispatch(AuthActionCreator.logout());

export const AuthActionType = {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
};

export const AuthAction = {
  login,
  logout
};
