const SAVE_USER = 'SAVE_USER';
const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION';

export const UserActionType = {
  SAVE_USER,
  SAVE_USER_QUESTION
};

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
  })
};

const saveUser = user => dispatch => {
  return dispatch(UserActionCreator.saveUser(user));
};

const saveUserQuestion = (username, questionId) => dispatch => {
  return dispatch(UserActionCreator.saveUserQuestion(username, questionId));
};

export const UserAction = {
  saveUser,
  saveUserQuestion
};
