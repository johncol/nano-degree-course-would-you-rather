import React, { Component } from 'react';

import PollPreviewList from './../shared/poll-preview-list/PollPreviewList';

class Home extends Component {
  state = {};
  render() {
    const polls = [
      { id: '1', optionA: { text: 'lorem' }, optionB: { text: 'lorem' } },
      { id: '2', optionA: { text: 'lorem' }, optionB: { text: 'lorem' } },
      { id: '3', optionA: { text: 'lorem' }, optionB: { text: 'lorem' } },
      { id: '4', optionA: { text: 'lorem' }, optionB: { text: 'lorem' } },
      { id: '5', optionA: { text: 'lorem' }, optionB: { text: 'lorem' } }
    ];
    return (
      <div>
        <PollPreviewList polls={polls} title="Unanswered" />
      </div>
    );
  }
}

export default Home;
