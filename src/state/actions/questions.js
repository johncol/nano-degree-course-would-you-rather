import * as API from './../../api/_DATA';
import { LoaderAction } from './loader';
import { UserAction } from './users';

const SAVE_ALL_QUESTIONS = 'SAVE_ALL_QUESTIONS';
const ADD_QUESTION = 'ADD_QUESTION';

const QuestionActionCreator = {
  saveAllQuestions: questions => ({
    type: SAVE_ALL_QUESTIONS,
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
      dispatch(QuestionActionCreator.saveAllQuestions(questions));
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
      dispatch(UserAction.saveUserQuestion(question.author, question.id));
    })
    .catch(error => {
      dispatch(LoaderAction.hideLoader());
      console.warn('Error fetching all questions:', error);
    });
};

export const QuestionActionType = {
  SAVE_ALL_QUESTIONS,
  ADD_QUESTION
};

export const QuestionAction = {
  fetchAllQuestions,
  addQuestion
};
