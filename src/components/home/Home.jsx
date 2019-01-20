import React, { Component } from 'react';
import { connect } from 'react-redux';

import PollPreviewList from './../shared/poll-preview-list/PollPreviewList';

class Home extends Component {
  render() {
    const polls = [
      { id: '1', optionOne: { text: 'lorem' }, optionTwo: { text: 'lorem' } },
      { id: '2', optionOne: { text: 'lorem' }, optionTwo: { text: 'lorem' } },
      { id: '3', optionOne: { text: 'lorem' }, optionTwo: { text: 'lorem' } },
      { id: '4', optionOne: { text: 'lorem' }, optionTwo: { text: 'lorem' } },
      { id: '5', optionOne: { text: 'lorem' }, optionTwo: { text: 'lorem' } }
    ];
    return (
      <div>
        <PollPreviewList polls={polls} title="Unanswered" />
      </div>
    );
  }
}

const stateToProps = state => ({});

const dispatchToProps = dispatch => ({});

export default connect(
  stateToProps,
  dispatchToProps
)(Home);
