import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionForm from './question-form/QuestionForm';
import QuestionTitle from './question-title/QuestionTitle';
import { QuestionAction } from '../../state/actions/questions';

import './add-question.scss';

class AddQuestion extends Component {
  addQuestion = question => {
    const { username, addQuestion, history } = this.props;
    addQuestion(question.optionOne, question.optionTwo, username);
    history.push('/');
  };

  render() {
    return (
      <section className="add-question">
        <QuestionTitle />
        <QuestionForm addQuestion={this.addQuestion} />
      </section>
    );
  }
}

const stateToProps = state => ({
  username: state.auth.username
});

const dispatchToProps = dispatch => ({
  addQuestion: (optionOneText, optionTwoText, author) => {
    dispatch(
      QuestionAction.addQuestion({
        optionOneText,
        optionTwoText,
        author
      })
    );
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(AddQuestion);
