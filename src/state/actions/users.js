import * as API from './../../api/_DATA';
import { LoaderAction } from './loader';

const SAVE_USER = 'SAVE_USER';
const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION';
const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';
const UNSAVE_USER_ANSWER = 'UNSAVE_USER_ANSWER';
const SAVE_ALL_USERS = 'SAVE_ALL_USERS';

export const UserActionType = {
  SAVE_USER,
  SAVE_USER_QUESTION,
  SAVE_USER_ANSWER,
  UNSAVE_USER_ANSWER,
  SAVE_ALL_USERS
};

export const UserActionCreator = {
  saveUser: user => ({
    type: SAVE_USER,
    payload: user
  }),

  saveUserQuestion: (username, questionId) => ({
    type: SAVE_USER_QUESTION,
    payload: {
      username,
      questionId
    }
  }),

  saveUserAnswer: (username, questionId, option) => ({
    type: SAVE_USER_ANSWER,
    payload: {
      username,
      questionId,
      option
    }
  }),

  unsaveUserAnswer: (username, questionId) => ({
    type: UNSAVE_USER_ANSWER,
    payload: {
      username,
      questionId
    }
  }),

  saveAllUsers: users => ({
    type: SAVE_ALL_USERS,
    payload: users
  })
};

const fetchAllUsers = () => dispatch => {
  dispatch(LoaderAction.showLoader());
  return API._getUsers(users => {
    dispatch(LoaderAction.hideLoader());
    dispatch(UserActionCreator.saveAllUsers(users));
  }).catch(error => {
    dispatch(LoaderAction.hideLoader());
    console.warn('Error fetching all users:', error);
  });
};

export const UserAction = {
  fetchAllUsers
};
