import React, { Component } from 'react';

class QuestionOption extends Component {
  buildClassName = () => {
    const { optionIndex, optionSelected } = this.props;
    let className = 'question__option question__option';
    className += optionIndex === 1 ? '--one' : '--two';
    if (optionSelected === optionIndex) {
      className += ' question__option--selected';
    }
    return className;
  };

  render() {
    const { option, onClick: answerQuestion } = this.props;
    return (
      <article className={this.buildClassName()} onClick={answerQuestion}>
        {option.text}
      </article>
    );
  }
}

export default QuestionOption;
