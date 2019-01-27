import React, { Component } from 'react';
import { connect } from 'react-redux';

import { QuestionAction } from '../../state/actions/questions';

import './question.scss';

class QuestionOption extends Component {
  buildClassName = () => {
    const { optionIndex, optionSelected } = this.props;
    let className = 'question__option question__option';
    className += optionIndex === 1 ? '--one' : '--two';
    if (optionSelected === optionIndex) {
      className += ' question__option--selected';
    }
    return className;
  };

  render() {
    const { option, onClick: answerQuestion } = this.props;
    return (
      <article className={this.buildClassName()} onClick={answerQuestion}>
        {option.text}
      </article>
    );
  }
}

const QuestionWrapper = ({ answerable, children }) => {
  const questionClassName = 'question' + (answerable ? ' question--answerable' : '');
  return <section className={questionClassName}>{children}</section>;
};

const QuestionTitle = () => <h1 className="question__title">Would you rather</h1>;

class Question extends Component {
  answerQuestion = optionSelected => {
    const { username, question, answerable } = this.props;
    if (answerable) {
      this.props.answerQuestion(username, question.id, optionSelected);
    }
  };

  render() {
    const { question, answerable, optionSelected } = this.props;
    return (
      <QuestionWrapper answerable={answerable}>
        <QuestionTitle />
        <div className="question__info">
          <QuestionOption
            option={question.optionOne}
            optionIndex={1}
            optionSelected={optionSelected}
            onClick={() => this.answerQuestion('optionOne')}
          />
          <span className="question__separator">or</span>
          <QuestionOption
            option={question.optionTwo}
            optionIndex={2}
            optionSelected={optionSelected}
            onClick={() => this.answerQuestion('optionTwo')}
          />
        </div>
      </QuestionWrapper>
    );
  }
}

const stateToProps = (state, props) => {
  const { id: questionId } = props.match.params;

  const { username } = state.auth;
  const user = state.users.list[username];
  const answer = user.answers[questionId];
  const optionSelected = answer === 'optionOne' ? 1 : answer === 'optionTwo' ? 2 : -1;

  return {
    username,
    question: state.questions[questionId],
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
