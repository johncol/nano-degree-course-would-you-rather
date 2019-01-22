import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionPreviewList from './../shared/question-preview-list/QuestionPreviewList';
import { QuestionAction } from '../../state/actions/questions';

class Home extends Component {
  componentDidMount() {
    this.props.fetchAllQuestions();
  }

  render() {
    const { unansweredQuestions, answeredQuestions } = this.props;
    return (
      <div>
        <QuestionPreviewList
          questions={unansweredQuestions}
          title="Unanswered questions"
          allowToAnswer={true}
        />
        <QuestionPreviewList
          questions={answeredQuestions}
          title="Answered questions"
          allowToAnswer={false}
        />
      </div>
    );
  }
}

const stateToProps = state => {
  const questions = Object.values(state.questions);
  const answers = Object.keys(state.auth.user.answers);

  const unansweredQuestions = questions.filter(
    question => answers.indexOf(question.id) === -1
  );
  const answeredQuestions = questions.filter(
    question => answers.indexOf(question.id) !== -1
  );
  return {
    unansweredQuestions,
    answeredQuestions
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
