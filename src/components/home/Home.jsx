import React, { Component } from 'react';
import { connect } from 'react-redux';

import { QuestionAction } from '../../state/actions/questions';
import QuestionPreviewList from './../shared/question-preview-list/QuestionPreviewList';
import ListsToggle from './lists-toggle/ListsToggle';

class Home extends Component {
  state = {
    unanswerdListVisible: true,
    answerdListVisible: true
  };

  showBothLists = () => {
    this.setState({
      unanswerdListVisible: true,
      answerdListVisible: true
    });
  };

  showUnansweredList = () => {
    this.setState({
      unanswerdListVisible: true,
      answerdListVisible: false
    });
  };

  showAnsweredList = () => {
    this.setState({
      unanswerdListVisible: false,
      answerdListVisible: true
    });
  };

  componentDidMount() {
    this.props.fetchAllQuestions();
  }

  render() {
    const { unansweredQuestions, answeredQuestions } = this.props;
    const { unanswerdListVisible, answerdListVisible } = this.state;
    return (
      <div>
        <ListsToggle
          showBothLists={this.showBothLists}
          showUnansweredList={this.showUnansweredList}
          showAnsweredList={this.showAnsweredList}
          unanswerdListVisible={unanswerdListVisible}
          answerdListVisible={answerdListVisible}
        />
        {unanswerdListVisible && (
          <QuestionPreviewList
            questions={unansweredQuestions}
            title="Unanswered questions"
            allowToAnswer={true}
          />
        )}
        {answerdListVisible && (
          <QuestionPreviewList
            questions={answeredQuestions}
            title="Answered questions"
            allowToAnswer={false}
          />
        )}
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
