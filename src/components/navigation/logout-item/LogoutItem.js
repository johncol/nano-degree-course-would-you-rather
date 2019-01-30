import React from 'react';

const LogoutItem = ({ onClick: logout, username }) => (
  <li>
    <span to="/logout" className="nav__link nav__link--user" onClick={logout}>
      Logout <span className="nav__link__username">{username}</span>
      <i className="material-icons tiny">person_outline</i>
    </span>
  </li>
);

export default LogoutItem;
