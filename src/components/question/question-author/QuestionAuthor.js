import React, { Component } from 'react';
import { connect } from 'react-redux';

import './question-author.scss';

class QuestionAuthor extends Component {
  render() {
    const { author, avatarURL } = this.props;
    return (
      <div className="question__author">
        <span>
          a question asked by <span className="question__author-name">{author}</span>
        </span>
        <img
          src={avatarURL}
          alt={author + ' avatar'}
          className="question__author-avatar"
        />
      </div>
    );
  }
}

const stateToProps = (state, props) => {
  const { author } = props;
  const { avatarURL } = state.users.list[author];
  return {
    author,
    avatarURL
  };
};

export default connect(stateToProps)(QuestionAuthor);
