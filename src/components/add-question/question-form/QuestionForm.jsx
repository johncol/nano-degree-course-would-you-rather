import React, { Component } from 'react';

import Button from '../../shared/button/Button';
import QuestionOption from './../question-option/QuestionOption';

class QuestionForm extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    focusOne: true,
    focusTwo: false
  };

  giveFocusToOptionTwo = () => {
    this.setState({
      focusOne: false,
      focusTwo: true
    });
  };

  updateOptionValue = event => {
    const field = event.target.name;
    const value = event.target.value;
    this.setState({
      [field]: value,
      focusOne: field === 'optionOne',
      focusTwo: field === 'optionTwo'
    });
  };

  render() {
    const { addQuestion } = this.props;
    const { optionOne, optionTwo, focusOne, focusTwo } = this.state;
    return (
      <form
        onSubmit={event => addQuestion(event, this.state)}
        autoComplete="off"
      >
        <QuestionOption
          name="optionOne"
          placeholder="this"
          value={optionOne}
          updateValue={this.updateOptionValue}
          handleEnter={this.giveFocusToOptionTwo}
          focused={focusOne}
        />

        <span className="add-question__option-separator">Or</span>

        <QuestionOption
          name="optionTwo"
          placeholder="that"
          value={optionTwo}
          updateValue={this.updateOptionValue}
          focused={focusTwo}
        />

        <Button className="add-question__button">Add</Button>
      </form>
    );
  }
}

export default QuestionForm;
