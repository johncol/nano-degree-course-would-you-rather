import { UserActionType } from '../actions/users';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionType.SAVE_USER:
      return saveUser(state, action);

    case UserActionType.SAVE_USER_QUESTION:
      return saveUserQuestion(state, action);

    case UserActionType.SAVE_USER_ANSWER:
      return saveUserAnswer(state, action);

    default:
      return state;
  }
};

const saveUser = (state, action) => {
  const user = action.payload;
  return {
    ...state,
    [user.id]: user
  };
};

const saveUserQuestion = (state, action) => {
  const { username, questionId } = action.payload;
  const user = state[username];
  const questions = [...user.questions, questionId];
  return {
    ...state,
    [user.id]: {
      ...user,
      questions
    }
  };
};

const saveUserAnswer = (state, action) => {
  const { username, questionId, option } = action.payload;
  const user = state[username];
  const answers = { ...user.answers, [questionId]: option };
  return {
    ...state,
    [user.id]: {
      ...user,
      answers
    }
  };
};

export default usersReducer;
