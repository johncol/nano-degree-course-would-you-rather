import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    const {
      question,
      option,
      onClick: answerQuestion,
      showStatistics,
      statistics
    } = this.props;
    return (
      <article className={this.buildClassName()} onClick={() => answerQuestion(option)}>
        <span className="question__option-text">{question[option].text}</span>
        {showStatistics && (
          <span className="question__option-data">
            {statistics.votes} votes ({statistics.percentage}%)
          </span>
        )}
        <span className="question__selected-text">(selected)</span>
      </article>
    );
  }
}

const stateToProps = (state, props) => {
  const { question, option } = props;
  const votes = question[option].votes.length;

  const { optionOne, optionTwo } = question;
  const percentage = (
    (votes / (optionOne.votes.length + optionTwo.votes.length)) *
    100
  ).toFixed(1);

  const { username } = state.auth;
  const showStatistics =
    optionOne.votes.indexOf(username) !== -1 || optionTwo.votes.indexOf(username) !== -1;

  return {
    ...props,
    showStatistics,
    statistics: {
      votes,
      percentage
    }
  };
};

export default connect(stateToProps)(QuestionOption);
