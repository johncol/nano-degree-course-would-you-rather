import React, { Component } from 'react';

import './input-field.scss';

class InputField extends Component {
  render() {
    const { id, label } = this.props;
    return (
      <div className="input-field">
        <input {...this.props} />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}

export default InputField;
