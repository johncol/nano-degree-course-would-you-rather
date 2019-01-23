import React, { Component } from 'react';

import Button from '../../shared/button/Button';
import QuestionOption from './../question-option/QuestionOption';

class QuestionForm extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  };

  updateOptionValue = event => {
    const field = event.target.name;
    const value = event.target.value;
    this.setState({
      [field]: value
    });
  };

  render() {
    const { addQuestion } = this.props;
    const { optionOne, optionTwo } = this.state;
    return (
      <form onSubmit={event => addQuestion(event, this.state)} autoComplete="off">
        <QuestionOption
          name="optionOne"
          placeholder="this"
          value={optionOne}
          updateValue={this.updateOptionValue}
        />

        <span className="add-question__option-separator">Or</span>

        <QuestionOption
          name="optionTwo"
          placeholder="that"
          value={optionTwo}
          updateValue={this.updateOptionValue}
        />

        <Button className="add-question__button">Add</Button>
      </form>
    );
  }
}

export default QuestionForm;
