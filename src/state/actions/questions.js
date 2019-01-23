import * as API from './../../api/_DATA';
import { LoaderAction } from './loader';

const FETCH_ALL_QUESTIONS = 'FETCH_ALL_QUESTIONS';
const ADD_QUESTION = 'ADD_QUESTION';

const QuestionActionCreator = {
  fetchAllQuestions: questions => ({
    type: FETCH_ALL_QUESTIONS,
    payload: questions
  }),

  addQuestion: question => ({
    type: ADD_QUESTION,
    payload: question
  })
};

const fetchAllQuestions = () => dispatch => {
  dispatch(LoaderAction.showLoader());
  return API._getQuestions()
    .then(questions => {
      dispatch(LoaderAction.hideLoader());
      dispatch(QuestionActionCreator.fetchAllQuestions(questions));
    })
    .catch(error => {
      dispatch(LoaderAction.hideLoader());
      console.warn('Error fetching all questions:', error);
    });
};

const addQuestion = questionInfo => dispatch => {
  dispatch(LoaderAction.showLoader());

  return API._saveQuestion(questionInfo)
    .then(question => {
      dispatch(LoaderAction.hideLoader());
      dispatch(QuestionActionCreator.addQuestion(question));
    })
    .catch(error => {
      dispatch(LoaderAction.hideLoader());
      console.warn('Error fetching all questions:', error);
    });
};

export const QuestionActionType = {
  FETCH_ALL_QUESTIONS,
  ADD_QUESTION
};

export const QuestionAction = {
  fetchAllQuestions,
  addQuestion
};
