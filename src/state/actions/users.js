import * as API from './../../api/_DATA';
import { UserActionType } from './action-types';
import { LoaderAction } from './loader';

export const UserActionCreator = {
  saveUser: user => ({
    type: UserActionType.SAVE_USER,
    payload: user
  }),

  saveUserQuestion: (username, questionId) => ({
    type: UserActionType.SAVE_USER_QUESTION,
    payload: {
      username,
      questionId
    }
  }),

  saveUserAnswer: (username, questionId, option) => ({
    type: UserActionType.SAVE_USER_ANSWER,
    payload: {
      username,
      questionId,
      option
    }
  }),

  unsaveUserAnswer: (username, questionId) => ({
    type: UserActionType.UNSAVE_USER_ANSWER,
    payload: {
      username,
      questionId
    }
  }),

  saveAllUsers: users => ({
    type: UserActionType.SAVE_ALL_USERS,
    payload: users
  })
};

const fetchAllUsers = () => dispatch => {
  dispatch(LoaderAction.showLoader());
  return API._getUsers()
    .then(users => {
      dispatch(LoaderAction.hideLoader());
      dispatch(UserActionCreator.saveAllUsers(users));
    })
    .catch(error => {
      dispatch(LoaderAction.hideLoader());
      console.warn('Error fetching all users:', error);
    });
};

export const UserAction = {
  fetchAllUsers
};
