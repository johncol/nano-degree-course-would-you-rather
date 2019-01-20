import * as API from './../../api/_DATA';
import { LoaderAction } from './loader';

const FETCH_QUESTION = 'FETCH_QUESTION';
const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
const FETCH_ALL_QUESTIONS = 'FETCH_ALL_QUESTIONS';

const QuestionActionCreator = {
  fetchQuestion: question => ({
    type: FETCH_QUESTION,
    payload: question
  }),

  fetchQuestions: questions => ({
    type: FETCH_QUESTIONS,
    payload: questions
  }),

  fetchAllQuestions: questions => ({
    type: FETCH_ALL_QUESTIONS,
    payload: questions
  })
};

const fetchQuestion = id => dispatch => {
  dispatch(LoaderAction.showLoader());
  return API._getQuestion(id)
    .then(response => {
      const question = response.question;
      dispatch(LoaderAction.hideLoader());
      dispatch(QuestionActionCreator.fetchQuestion(question));
    })
    .catch(error => {
      dispatch(LoaderAction.hideLoader());
      console.warn('Error fetching question:', id, error);
    });
};

const fetchQuestions = ids => dispatch => {
  dispatch(LoaderAction.showLoader());
  const apiRequests = ids.map(API._getQuestion);
  return Promise.all(apiRequests)
    .then(responses => {
      const questions = responses.map(response => response.question);
      dispatch(LoaderAction.hideLoader());
      dispatch(QuestionActionCreator.fetchQuestions(questions));
    })
    .catch(error => {
      dispatch(LoaderAction.hideLoader());
      console.warn('Error fetching questions:', ids, error);
    });
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

export const QuestionActionType = {
  FETCH_QUESTION,
  FETCH_QUESTIONS,
  FETCH_ALL_QUESTIONS
};

export const QuestionAction = {
  fetchQuestion,
  fetchQuestions,
  fetchAllQuestions
};
