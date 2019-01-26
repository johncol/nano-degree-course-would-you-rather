import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionPreviewList from './question-preview-list/QuestionPreviewList';
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
            allowToAnswer={true}
            title="Unanswered questions"
            zeroItemsMessage="Create a new question using the option in the upper menu"
          />
        )}
        {answerdListVisible && (
          <QuestionPreviewList
            questions={answeredQuestions}
            allowToAnswer={false}
            title="Answered questions"
            zeroItemsMessage="You haven't answered any question yet"
          />
        )}
      </div>
    );
  }
}

const sortDescByTimestamp = (question1, question2) => {
  return question2.timestamp - question1.timestamp;
};

const stateToProps = state => {
  const questions = Object.values(state.questions);
  const { username } = state.auth;
  const user = state.users.list[username];
  const answers = Object.keys(user.answers);

  const unansweredQuestions = questions
    .filter(question => answers.indexOf(question.id) === -1)
    .sort(sortDescByTimestamp);
  const answeredQuestions = questions
    .filter(question => answers.indexOf(question.id) !== -1)
    .sort(sortDescByTimestamp);

  return {
    unansweredQuestions,
    answeredQuestions
  };
};

const dispatchToProps = dispatch => ({});

export default connect(
  stateToProps,
  dispatchToProps
)(Home);
