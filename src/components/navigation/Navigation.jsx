import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { AuthAction } from '../../state/actions/auth';

import './navigation.scss';

class Navigation extends Component {
  render() {
    const { username, logout } = this.props;
    return (
      <nav>
        <ul>
          <li>
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/add-question">
              Add question
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/leaderboard">
              Leaderboard
            </NavLink>
          </li>
          <li>
            <span to="/logout" className="nav-link nav-link--user" onClick={logout}>
              Logout <span className="nav-link__username">{username}</span>
              <i className="material-icons tiny">person_outline</i>
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}

const stateToProps = state => ({
  username: state.auth.username
});

const dispatchToProps = dispatch => ({
  logout: () => dispatch(AuthAction.logout())
});

export default connect(
  stateToProps,
  dispatchToProps
)(Navigation);
