import { UserActionType } from '../actions/action-types';

const initialUsersState = {
  allUsersRequested: false,
  list: {}
};

const usersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case UserActionType.SAVE_USER:
      return saveUser(state, action);

    case UserActionType.SAVE_USER_QUESTION:
      return saveUserQuestion(state, action);

    case UserActionType.SAVE_USER_ANSWER:
      return saveUserAnswer(state, action);

    case UserActionType.UNSAVE_USER_ANSWER:
      return unsaveUserAnswer(state, action);

    case UserActionType.SAVE_ALL_USERS:
      return saveAllUsers(state, action);

    default:
      return state;
  }
};

const saveUser = (state, action) => {
  const user = action.payload;
  return {
    ...state,
    list: {
      ...state.list,
      [user.id]: user
    }
  };
};

const saveUserQuestion = (state, action) => {
  const { username, questionId } = action.payload;
  const user = state.list[username];
  const questions = [...user.questions, questionId];
  return {
    ...state,
    list: {
      ...state.list,
      [user.id]: {
        ...user,
        questions
      }
    }
  };
};

const saveUserAnswer = (state, action) => {
  const { username, questionId, option } = action.payload;
  const user = state.list[username];
  const answers = { ...user.answers, [questionId]: option };
  return {
    ...state,
    list: {
      ...state.list,
      [user.id]: {
        ...user,
        answers
      }
    }
  };
};

const unsaveUserAnswer = (state, action) => {
  const { username, questionId } = action.payload;
  const user = state.list[username];
  const answers = { ...user.answers };
  delete answers[questionId];
  return {
    ...state,
    list: {
      ...state.list,
      [user.id]: {
        ...user,
        answers
      }
    }
  };
};

const saveAllUsers = (state, action) => {
  return {
    allUsersRequested: true,
    list: {
      ...action.payload
    }
  };
};

export default usersReducer;
