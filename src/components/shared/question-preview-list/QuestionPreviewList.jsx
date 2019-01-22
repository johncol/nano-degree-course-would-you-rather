import React from 'react';

import QuestionPreview from '../question-preview/QuestionPreview';

import './question-preview-list.scss';

const QuestionPreviewList = props => {
  const { title, questions, allowToAnswer } = props;
  return (
    <div className="question-preview-list">
      <h1>{title}</h1>
      <ul>
        {questions.map(question => (
          <li key={question.id}>
            <QuestionPreview question={question} allowToAnswer={allowToAnswer} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionPreviewList;
