import { QuestionActionType } from '../actions/questions';

const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case QuestionActionType.SAVE_ALL_QUESTIONS:
      return saveAllQuestions(state, action);

    case QuestionActionType.ADD_QUESTION:
      return addQuestion(state, action);

    case QuestionActionType.ANSWER_QUESTION:
      return answerQuestion(state, action);

    case QuestionActionType.UNANSWER_QUESTION:
      return unanswerQuestion(state, action);

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

const answerQuestion = (state, action) => {
  const { username, questionId, option } = action.payload;

  const question = state[questionId];
  const selectedOption = question[option];
  const votes = [...selectedOption.votes, username];

  return {
    ...state,
    [questionId]: {
      ...question,
      [option]: {
        ...selectedOption,
        votes
      }
    }
  };
};

const unanswerQuestion = (state, action) => {
  const { username, questionId, option } = action.payload;

  const question = state[questionId];
  const selectedOption = question[option];
  const votes = selectedOption.votes.filter(vote => vote !== username);

  return {
    ...state,
    [questionId]: {
      ...question,
      [option]: {
        ...selectedOption,
        votes
      }
    }
  };
};

export default questionsReducer;
