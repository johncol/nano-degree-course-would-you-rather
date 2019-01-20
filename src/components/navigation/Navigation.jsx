import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './navigation.scss';

class Navigation extends Component {
  render() {
    const { username } = this.props;
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
            <NavLink to="/logout" className="nav-link--user">
              {username}
              <i className="material-icons tiny">person_outline</i>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

const stateToProps = state => ({
  username: state.auth.user.id
});

export default connect(stateToProps)(Navigation);
