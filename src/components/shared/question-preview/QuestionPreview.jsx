import React from 'react';

import './question-preview.scss';

const QuestionPreview = props => {
  const { optionOne, optionTwo } = props.question;
  return (
    <article className="question-preview">
      <section className="question-preview__option content--red">
        {optionOne.text}
      </section>
      <section className="question-preview__option content--grey">
        {optionTwo.text}
      </section>
    </article>
  );
};

export default QuestionPreview;
