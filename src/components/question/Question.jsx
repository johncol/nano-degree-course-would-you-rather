import React, { Component } from 'react';
import { connect } from 'react-redux';

import './question.scss';

class Question extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <section className="question">
        <h1 className="question__title">Would you rather</h1>
        <article className="question__option">Lorem ipsum dolor sit amet. {id}</article>
        <span className="question__separator">or</span>
        <article className="question__option">Lorem ipsum consectetur. {id}</article>
      </section>
    );
  }
}

const stateToProps = (state, props) => ({ ...props });
const dispatchToProps = dispatch => ({});

export default connect(
  stateToProps,
  dispatchToProps
)(Question);
