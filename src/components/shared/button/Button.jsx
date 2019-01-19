import React from 'react';

import './button.scss';

const Button = props => {
  const className = props.className ? ' ' + props.className : '';
  return (
    <button
      {...props}
      className={'btn waves-effect waves-light' + className}
      name="action"
    />
  );
};

export default Button;
