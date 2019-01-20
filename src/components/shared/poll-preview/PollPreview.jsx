import React from 'react';

import './poll-preview.scss';

const PollPreview = props => {
  const { optionOne, optionTwo } = props.poll;
  return (
    <article className="poll-preview">
      <section className="poll-preview__option content--red">{optionOne.text}</section>
      <section className="poll-preview__option content--grey">{optionTwo.text}</section>
    </article>
  );
};

export default PollPreview;
