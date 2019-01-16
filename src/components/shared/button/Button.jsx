import React from 'react';

import './button.scss';

const defaults = {
  type: 'submit'
};

const Button = props => {
  const { type, children } = props;
  return (
    <button
      className="btn waves-effect waves-light"
      type={type || defaults.type}
      name="action"
    >
      {children}
    </button>
  );
};

export default Button;
