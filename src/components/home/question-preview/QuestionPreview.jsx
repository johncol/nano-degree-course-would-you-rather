import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './question-preview.scss';
import { QuestionAction } from '../../../state/actions/questions';

const QuestionText = ({ text }) => (
  <div className="question-preview__text content--red">{text}</div>
);

const QuestionButton = ({ onClick: answerQuestion }) => (
  <button className="question-preview__button content--grey" onClick={answerQuestion}>
    <i className="material-icons">check</i>
  </button>
);

const QuestionOption = ({ option, text, allowToAnswer, onSelected: answerQuestion }) => {
  const optionClassName = 'question-preview__option--' + (option === 1 ? 'one' : 'two');
  return (
    <section className={'question-preview__option ' + optionClassName}>
      {allowToAnswer && <QuestionButton onClick={answerQuestion} />}
      <QuestionText text={text} />
    </section>
  );
};

class QuestionPreview extends React.Component {
  navigateToQuestion = () => {
    const { question, history } = this.props;
    history.push('/question/' + question.id);
  };

  render() {
    const { username, allowToAnswer, answerQuestion, question } = this.props;
    const { optionOne, optionTwo } = question;
    return (
      <article className="question-preview" onClick={this.navigateToQuestion}>
        <QuestionOption
          option={1}
          text={optionOne.text}
          allowToAnswer={allowToAnswer}
          onSelected={() => answerQuestion(username, question.id, 'optionOne')}
        />
        <QuestionOption
          option={2}
          text={optionTwo.text}
          allowToAnswer={allowToAnswer}
          onSelected={() => answerQuestion(username, question.id, 'optionTwo')}
        />
      </article>
    );
  }
}

const stateToProps = (state, props) => ({
  ...props,
  username: state.auth.username
});

const dispatchToProps = dispatch => ({
  answerQuestion: (username, questionId, option) => {
    dispatch(QuestionAction.answerQuestion(username, questionId, option));
  }
});

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(QuestionPreview)
);
