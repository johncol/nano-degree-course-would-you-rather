import React from 'react';

const QuestionOption = ({ placeholder, name, value, updateValue }) => {
  return (
    <div className="add-question__option input-field">
      <input
        className="add-question__input"
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={updateValue}
      />
    </div>
  );
};

export default QuestionOption;
