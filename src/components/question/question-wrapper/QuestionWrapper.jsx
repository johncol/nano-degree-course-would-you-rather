import React from 'react';

const QuestionWrapper = ({ answerable, children }) => {
  const questionClassName = 'question' + (answerable ? ' question--answerable' : '');
  return <section className={questionClassName}>{children}</section>;
};

export default QuestionWrapper;
