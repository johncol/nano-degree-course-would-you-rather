import * as API from './../../api/_DATA';
import { LoaderAction } from './loader';
import { UserActionCreator } from './users';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';

const AuthActionCreator = {
  loginSuccess: username => ({
    type: LOGIN_SUCCESS,
    payload: username
  }),

  loginFail: error => ({
    type: LOGIN_FAIL,
    payload: error
  }),

  logout: () => ({
    type: LOGOUT
  })
};

const login = (username, password) => dispatch => {
  dispatch(LoaderAction.showLoader());
  return API._login(username, password)
    .then(response => {
      dispatch(LoaderAction.hideLoader());
      dispatch(UserActionCreator.saveUser(response.user));
      dispatch(AuthActionCreator.loginSuccess(response.user.id));
    })
    .catch(error => {
      dispatch(LoaderAction.hideLoader());
      dispatch(AuthActionCreator.loginFail(error.message));
    });
};

const logout = () => dispatch => dispatch(AuthActionCreator.logout());

export const AuthActionType = {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
};

export const AuthAction = {
  login,
  logout
};
