import React from 'react';
import { connect } from 'react-redux';

import QuestionPreview from '../question-preview/QuestionPreview';

import './question-preview-list.scss';

const QuestionPreviewList = props => {
  const { title, zeroItemsMessage, questions, allowToAnswer, loading } = props;
  return (
    <div className="question-preview-list">
      <h1>{title}</h1>
      {!loading && questions.length === 0 && <p>{zeroItemsMessage}</p>}
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

const stateToProps = (state, props) => ({
  ...props,
  loading: state.loader
});

const dispatchToProps = state => ({});

export default connect(
  stateToProps,
  dispatchToProps
)(QuestionPreviewList);
