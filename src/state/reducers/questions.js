import { QuestionActionType } from '../actions/questions';

const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case QuestionActionType.FETCH_QUESTION:
      return fetchQuestion(state, action);

    case QuestionActionType.FETCH_QUESTIONS:
      return fetchQuestions(state, action);

    case QuestionActionType.FETCH_ALL_QUESTIONS:
      return fetchAllQuestions(state, action);

    default:
      return state;
  }
};

const fetchQuestion = (state, action) => {
  const question = action.payload;
  return {
    ...state,
    [question.id]: question
  };
};

const fetchQuestions = (state, action) => {
  const newState = { ...state };
  const questions = action.payload;
  questions.forEach(question => {
    newState[question.id] = question;
  });
  return newState;
};

const fetchAllQuestions = (state, action) => {
  return { ...action.payload };
};

export default questionsReducer;
