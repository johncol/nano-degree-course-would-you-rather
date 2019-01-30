import React from 'react';
import { Link } from 'react-router-dom';

import './not-found.scss';

const NotFound = ({ message = 'Page not found', link = 'Go home', path = '/' }) => (
  <div className="not-found">
    <span className="not-found__text">{message}</span>
    <Link className="not-found__link" to={path}>
      {link}
    </Link>
  </div>
);

export default NotFound;
