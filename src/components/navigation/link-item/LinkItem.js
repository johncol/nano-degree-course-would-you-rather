import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkItem = ({ to, onClick, children, exact }) => {
  const exactConfig = { exact };
  return (
    <li>
      <NavLink className="nav__link" to={to} onClick={onClick} {...exactConfig}>
        {children}
      </NavLink>
    </li>
  );
};

export default LinkItem;
