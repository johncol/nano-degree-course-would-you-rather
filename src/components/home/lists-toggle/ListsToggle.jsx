import React from 'react';

import './lists-toggle.scss';

const getSelectedClass = condition => {
  return condition ? 'selected' : '';
};

const ToggleButton = ({ label, onClick, selectedCodition }) => (
  <button type="button" onClick={onClick} className={getSelectedClass(selectedCodition)}>
    {label}
  </button>
);

const ListsToggle = props => {
  const {
    showBothLists,
    showUnansweredList,
    showAnsweredList,
    unanswerdListVisible,
    answerdListVisible
  } = props;
  return (
    <section className="list-toggle">
      <span>Showing: </span>
      <ToggleButton
        label="both"
        onClick={showBothLists}
        selectedCodition={unanswerdListVisible && answerdListVisible}
      />
      <ToggleButton
        label="unanswered"
        onClick={showUnansweredList}
        selectedCodition={unanswerdListVisible && !answerdListVisible}
      />
      <ToggleButton
        label="answered"
        onClick={showAnsweredList}
        selectedCodition={!unanswerdListVisible && answerdListVisible}
      />
    </section>
  );
};

export default ListsToggle;
