import React, { Component } from 'react';

import { enterWasPressed } from './../../../utils/key-utils';

class QuestionOption extends Component {
  handleEnter = event => {
    const { handleEnter } = this.props;
    if (enterWasPressed(event) && typeof handleEnter === 'function') {
      event.preventDefault();
      handleEnter();
    }
  };

  gainFocusIfShould = () => {
    if (this.props.focused) {
      this.input.focus();
    }
  };

  componentDidUpdate() {
    this.gainFocusIfShould();
  }

  componentDidMount() {
    this.gainFocusIfShould();
  }

  render() {
    const { placeholder, name, value, updateValue } = this.props;
    return (
      <div className="add-question__option input-field">
        <input
          className="add-question__input"
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={updateValue}
          onKeyDown={this.handleEnter}
          ref={input => (this.input = input)}
        />
      </div>
    );
  }
}

export default QuestionOption;
