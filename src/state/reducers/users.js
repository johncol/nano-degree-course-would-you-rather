import { UserActionType } from '../actions/users';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionType.SAVE_USER:
      return saveUser(state, action);

    case UserActionType.SAVE_USER_QUESTION:
      return saveUserQuestion(state, action);

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

export default usersReducer;
