import React from 'react';

import './question-preview.scss';

const QuestionText = ({ text }) => (
  <div className="question-preview__text content--red">{text}</div>
);

const QuestionButton = () => (
  <button className="question-preview__button content--grey">
    <i class="material-icons">check</i>
  </button>
);

const QuestionOption = ({ option, text }) => {
  const optionClassName = 'question-preview__option--' + (option === 1 ? 'one' : 'two');
  return (
    <section className={'question-preview__option ' + optionClassName}>
      <QuestionButton />
      <QuestionText text={text} />
    </section>
  );
};

const QuestionPreview = props => {
  const { optionOne, optionTwo } = props.question;
  return (
    <article className="question-preview">
      <QuestionOption option={1} text={optionOne.text} />
      <QuestionOption option={2} text={optionTwo.text} />
    </article>
  );
};

export default QuestionPreview;
