import React, { Component } from 'react';

import './input-field.scss';

class InputField extends Component {
  getInputProps = () => {
    const inputProps = { ...this.props };
    delete inputProps.saveRef;
    delete inputProps.id;
    delete inputProps.label;
    return inputProps;
  };

  render() {
    const { id, label, saveRef } = this.props;
    const inputProps = this.getInputProps();
    return (
      <div className="input-field">
        <input {...inputProps} ref={saveRef} />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}

export default InputField;
