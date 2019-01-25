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

  handleSubmit = event => {
    event.preventDefault();
    if (this.bothOptionsWereFilled()) {
      const { optionOne, optionTwo } = this.state;
      this.props.addQuestion({
        optionOne,
        optionTwo
      });
    }
  };

  bothOptionsWereFilled = () => {
    const { optionOne, optionTwo } = this.state;
    const optionOneNonEmpty = optionOne.trim() !== '';
    const optionTwoNonEmpty = optionTwo.trim() !== '';
    return optionOneNonEmpty && optionTwoNonEmpty;
  };

  render() {
    const { optionOne, optionTwo, focusOne, focusTwo } = this.state;
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
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

        <Button className="add-question__button" disabled={!this.bothOptionsWereFilled()}>
          Add
        </Button>
      </form>
    );
  }
}

export default QuestionForm;
