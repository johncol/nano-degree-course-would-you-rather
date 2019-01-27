import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import NavToggle from './nav-toggle/NavToggle';
import { AuthAction } from '../../state/actions/auth';

import './navigation.scss';

class Navigation extends Component {
  state = {
    visibleOnSmallBreakpoint: false
  };

  toggleMenuVisibility = () => {
    this.setState(state => ({
      visibleOnSmallBreakpoint: !state.visibleOnSmallBreakpoint
    }));
  };

  hideMenu = () => {
    this.setState({
      visibleOnSmallBreakpoint: false
    });
  };

  logout = () => {
    const { logout, history } = this.props;
    history.push('/');
    logout();
  };

  navigateToHome = () => {
    const { history } = this.props;
    history.goBack();
  };

  currentPathIsQuestion = () => {
    const { pathname } = this.props.history.location;
    return pathname.startsWith('/question');
  };

  render() {
    const { username } = this.props;
    const { visibleOnSmallBreakpoint } = this.state;
    const navClassName = 'nav' + (visibleOnSmallBreakpoint ? ' nav--toggle-visible' : '');
    const currentPathIsQuestion = this.currentPathIsQuestion();
    return (
      <nav className={navClassName}>
        {!currentPathIsQuestion && <NavToggle onClick={this.toggleMenuVisibility} />}
        <ul>
          {!currentPathIsQuestion && (
            <React.Fragment>
              <li>
                <NavLink className="nav__link" exact to="/" onClick={this.hideMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav__link" to="/add" onClick={this.hideMenu}>
                  Add question
                </NavLink>
              </li>
              <li>
                <NavLink className="nav__link" to="/leaderboard" onClick={this.hideMenu}>
                  Leaderboard
                </NavLink>
              </li>
              <li>
                <span
                  to="/logout"
                  className="nav__link nav__link--user"
                  onClick={this.logout}
                >
                  Logout <span className="nav__link__username">{username}</span>
                  <i className="material-icons tiny">person_outline</i>
                </span>
              </li>
            </React.Fragment>
          )}

          <li>
            {currentPathIsQuestion && (
              <NavLink className="nav__link" to="/question" onClick={this.navigateToHome}>
                Go Back
              </NavLink>
            )}
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

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(Navigation)
);
