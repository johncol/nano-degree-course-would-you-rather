import { QuestionActionType } from '../actions/questions';

const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case QuestionActionType.SAVE_ALL_QUESTIONS:
      return saveAllQuestions(state, action);

    case QuestionActionType.ADD_QUESTION:
      return addQuestion(state, action);

    default:
      return state;
  }
};

const saveAllQuestions = (state, action) => {
  return { ...action.payload };
};

const addQuestion = (state, action) => {
  const question = action.payload;
  return {
    ...state,
    [question.id]: question
  };
};

export default questionsReducer;
