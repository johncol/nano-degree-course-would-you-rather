import React from 'react';

import './poll-preview.scss';

const PollPreview = props => {
  const { optionA, optionB } = props.poll;
  return (
    <article className="poll-preview">
      <section className="poll-preview__option content--red">{optionA.text}</section>
      <section className="poll-preview__option content--grey">{optionB.text}</section>
    </article>
  );
};

export default PollPreview;
