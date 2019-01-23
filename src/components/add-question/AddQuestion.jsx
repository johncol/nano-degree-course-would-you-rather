import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionForm from './question-form/QuestionForm';
import QuestionTitle from './question-title/QuestionTitle';

import './add-question.scss';

class AddQuestion extends Component {
  state = {};

  addQuestion = (event, question) => {
    event.preventDefault();
    console.log('TODO: add question: ', question);
  };

  render() {
    return (
      <section className="add-question">
        <QuestionTitle />
        <QuestionForm
          addQuestion={(event, question) => this.addQuestion(event, question)}
        />
      </section>
    );
  }
}

const stateToProps = state => ({});
const dispatchToProps = dispatch => ({});

export default connect(
  stateToProps,
  dispatchToProps
)(AddQuestion);
