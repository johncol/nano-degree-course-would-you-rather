import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionWrapper from './question-wrapper/QuestionWrapper';
import QuestionTitle from './question-title/QuestionTitle';
import QuestionAuthor from './question-author/QuestionAuthor';
import QuestionOptions from './question-options/QuestionOptions';
import NotFound from './../shared/not-found/NewFound';
import { QuestionAction } from '../../state/actions/questions';

import './question.scss';

class Question extends Component {
  answerQuestion = optionSelected => {
    const { username, question, answerable } = this.props;
    if (answerable) {
      this.props.answerQuestion(username, question.id, optionSelected);
    }
  };

  render() {
    const { questionNotFound, question, answerable, optionSelected } = this.props;
    if (questionNotFound) {
      return <NotFound message="Question not found" />;
    }

    return (
      <QuestionWrapper answerable={answerable}>
        <QuestionTitle />
        <QuestionOptions
          question={question}
          optionSelected={optionSelected}
          answerQuestion={this.answerQuestion}
        />
        <QuestionAuthor author={question.author} />
      </QuestionWrapper>
    );
  }
}

const stateToProps = (state, props) => {
  const { id: questionId } = props.match.params;
  const question = state.questions[questionId];
  if (!question) {
    return { questionNotFound: true };
  }

  const { username } = state.auth;
  const user = state.users.list[username];
  const answer = user.answers[questionId];
  const optionSelected = answer === 'optionOne' ? 1 : answer === 'optionTwo' ? 2 : -1;

  return {
    username,
    question,
    answerable: !answer,
    optionSelected
  };
};

const dispatchToProps = dispatch => ({
  answerQuestion: (username, questionId, option) => {
    dispatch(QuestionAction.answerQuestion(username, questionId, option));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(Question);
