import React, { Component } from 'react';
import { connect } from 'react-redux';

import PollPreviewList from './../shared/poll-preview-list/PollPreviewList';
import { QuestionAction } from '../../state/actions/questions';

class Home extends Component {
  componentDidMount() {
    this.props.fetchAllQuestions();
  }

  render() {
    const { questions } = this.props;
    return (
      <div>
        <PollPreviewList polls={questions} title="All questions" />
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
