import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionPreviewList from './../shared/question-preview-list/QuestionPreviewList';
import { QuestionAction } from '../../state/actions/questions';

class Home extends Component {
  componentDidMount() {
    this.props.fetchAllQuestions();
  }

  render() {
    const { questions } = this.props;
    return (
      <div>
        <QuestionPreviewList questions={questions} title="All questions" />
      </div>
    );
  }
}

const stateToProps = state => {
  const questions = Object.values(state.questions);
  return {
    questions
  };
};

const dispatchToProps = dispatch => ({
  fetchAllQuestions: () => {
    dispatch(QuestionAction.fetchAllQuestions());
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(Home);
