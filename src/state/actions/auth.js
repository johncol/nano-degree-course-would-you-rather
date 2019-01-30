import * as API from './../../api/_DATA';
import { AuthActionType } from './action-types';
import { LoaderAction } from './loader';
import { UserActionCreator } from './users';

const AuthActionCreator = {
  loginSuccess: username => ({
    type: AuthActionType.LOGIN_SUCCESS,
    payload: username
  }),

  loginFail: error => ({
    type: AuthActionType.LOGIN_FAIL,
    payload: error
  }),

  logout: () => ({
    type: AuthActionType.LOGOUT
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

export const AuthAction = {
  login,
  logout
};
