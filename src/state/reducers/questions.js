import { QuestionActionType } from '../actions/questions';

const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case QuestionActionType.FETCH_ALL_QUESTIONS:
      return fetchAllQuestions(state, action);

    case QuestionActionType.ADD_QUESTION:
      return addQuestion(state, action);

    default:
      return state;
  }
};

const fetchAllQuestions = (state, action) => {
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
