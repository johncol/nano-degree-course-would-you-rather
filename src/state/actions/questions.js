import * as API from './../../api/_DATA';
import { LoaderAction } from './loader';
import { UserActionCreator } from './users';

const SAVE_ALL_QUESTIONS = 'SAVE_ALL_QUESTIONS';
const ADD_QUESTION = 'ADD_QUESTION';
const ANSWER_QUESTION = 'ANSWER_QUESTION';
const UNANSWER_QUESTION = 'UNANSWER_QUESTION';

const QuestionActionCreator = {
  saveAllQuestions: questions => ({
    type: SAVE_ALL_QUESTIONS,
    payload: questions
  }),

  addQuestion: question => ({
    type: ADD_QUESTION,
    payload: question
  }),

  answerQuestion: (username, questionId, option) => ({
    type: ANSWER_QUESTION,
    payload: {
      username,
      questionId,
      option
    }
  }),

  unanswerQuestion: (username, questionId, option) => ({
    type: UNANSWER_QUESTION,
    payload: {
      username,
      questionId,
      option
    }
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
      dispatch(UserActionCreator.saveUserQuestion(question.author, question.id));
    })
    .catch(error => {
      dispatch(LoaderAction.hideLoader());
      console.warn('Error fetching all questions:', error);
    });
};

const answerQuestion = (username, questionId, option) => dispatch => {
  dispatch(QuestionActionCreator.answerQuestion(username, questionId, option));
  dispatch(UserActionCreator.saveUserAnswer(username, questionId, option));

  const answerPayload = {
    authedUser: username,
    qid: questionId,
    answer: option
  };
  return API._saveQuestionAnswer(answerPayload).catch(() => {
    dispatch(QuestionActionCreator.unanswerQuestion(username, questionId, option));
    dispatch(UserActionCreator.unsaveUserAnswer(username, questionId));
    alert('An error occured in the server, the question could not be saved');
  });
};

export const QuestionActionType = {
  SAVE_ALL_QUESTIONS,
  ADD_QUESTION,
  ANSWER_QUESTION,
  UNANSWER_QUESTION
};

export const QuestionAction = {
  fetchAllQuestions,
  addQuestion,
  answerQuestion
};
