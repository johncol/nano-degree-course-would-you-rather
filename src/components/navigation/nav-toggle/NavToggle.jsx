import React from 'react';

const NavToggle = ({ onClick: toggle }) => (
  <i className="material-icons nav__toggle" onClick={toggle}>
    format_align_justify
  </i>
);

export default NavToggle;
