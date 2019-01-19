import React from 'react';

import PollPreview from '../poll-preview/PollPreview';

import './poll-preview-list.scss';

const PollPreviewList = props => {
  const { title, polls } = props;
  return (
    <div className="poll-preview-list">
      <h1>{title}</h1>
      <ul>
        {polls.map(poll => (
          <li key={poll.id}>
            <PollPreview poll={poll} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollPreviewList;
