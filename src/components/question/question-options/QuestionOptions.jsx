import React from 'react';

import QuestionOption from './../question-option/QuestionOption';

const QuestionOptions = ({ question, optionSelected, answerQuestion }) => {
  return (
    <div className="question__options">
      <QuestionOption
        question={question}
        option={'optionOne'}
        optionIndex={1}
        optionSelected={optionSelected}
        onClick={answerQuestion}
      />
      <span className="question__separator">or</span>
      <QuestionOption
        question={question}
        option={'optionTwo'}
        optionIndex={2}
        optionSelected={optionSelected}
        onClick={answerQuestion}
      />
    </div>
  );
};

export default QuestionOptions;
