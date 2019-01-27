import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './question-preview.scss';

const QuestionText = ({ text }) => (
  <div className="question-preview__text content--red">{text}</div>
);

const QuestionOption = ({ option, text }) => {
  const optionClassName = 'question-preview__option--' + (option === 1 ? 'one' : 'two');
  return (
    <section className={'question-preview__option ' + optionClassName}>
      <QuestionText text={text} />
    </section>
  );
};

class QuestionPreview extends Component {
  navigateToQuestion = () => {
    const { question, history } = this.props;
    history.push('/question/' + question.id);
  };

  render() {
    const { allowToAnswer, question } = this.props;
    const { optionOne, optionTwo } = question;
    return (
      <article className="question-preview" onClick={this.navigateToQuestion}>
        <QuestionOption option={1} text={optionOne.text} allowToAnswer={allowToAnswer} />
        <QuestionOption option={2} text={optionTwo.text} allowToAnswer={allowToAnswer} />
      </article>
    );
  }
}

export default withRouter(connect()(QuestionPreview));
