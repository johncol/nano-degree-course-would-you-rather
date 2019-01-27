import React from 'react';

import QuestionOption from './../question-option/QuestionOption';

const QuestionOptions = ({ question, optionSelected, answerQuestion }) => {
  return (
    <div className="question__options">
      <QuestionOption
        option={question.optionOne}
        optionIndex={1}
        optionSelected={optionSelected}
        onClick={() => answerQuestion('optionOne')}
      />
      <span className="question__separator">or</span>
      <QuestionOption
        option={question.optionTwo}
        optionIndex={2}
        optionSelected={optionSelected}
        onClick={() => answerQuestion('optionTwo')}
      />
    </div>
  );
};

export default QuestionOptions;
