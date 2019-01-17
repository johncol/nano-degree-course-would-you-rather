import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-poll">New poll</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
          <li>
            <NavLink to="/logout">User</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
