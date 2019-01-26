const SAVE_USER = 'SAVE_USER';
const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION';
const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';
const UNSAVE_USER_ANSWER = 'UNSAVE_USER_ANSWER';

const UserActionCreator = {
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
  })
};

const saveUser = user => dispatch => {
  return dispatch(UserActionCreator.saveUser(user));
};

const saveUserQuestion = (username, questionId) => dispatch => {
  return dispatch(UserActionCreator.saveUserQuestion(username, questionId));
};

const saveUserAnswer = (username, questionId, option) => dispatch => {
  return dispatch(UserActionCreator.saveUserAnswer(username, questionId, option));
};

const unsaveUserAnswer = (username, questionId) => dispatch => {
  return dispatch(UserActionCreator.unsaveUserAnswer(username, questionId));
};

export const UserActionType = {
  SAVE_USER,
  SAVE_USER_QUESTION,
  SAVE_USER_ANSWER,
  UNSAVE_USER_ANSWER
};

export const UserAction = {
  saveUser,
  saveUserQuestion,
  saveUserAnswer,
  unsaveUserAnswer
};
