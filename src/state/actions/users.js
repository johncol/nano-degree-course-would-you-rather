const SAVE_USER = 'SAVE_USER';
const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION';
const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';
const UNSAVE_USER_ANSWER = 'UNSAVE_USER_ANSWER';

export const UserActionType = {
  SAVE_USER,
  SAVE_USER_QUESTION,
  SAVE_USER_ANSWER,
  UNSAVE_USER_ANSWER
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
  })
};
