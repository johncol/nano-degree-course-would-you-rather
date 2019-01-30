import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import NavToggle from './nav-toggle/NavToggle';
import LinkItem from './link-item/LinkItem';
import LogoutItem from './logout-item/LogoutItem';
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
    return pathname.startsWith('/questions');
  };

  buildNavClassName = () => {
    const { visibleOnSmallBreakpoint } = this.state;
    const navClassName = 'nav' + (visibleOnSmallBreakpoint ? ' nav--toggle-visible' : '');
    return navClassName;
  };

  render() {
    const { username } = this.props;
    const currentPathIsQuestion = this.currentPathIsQuestion();
    return (
      <nav className={this.buildNavClassName()}>
        {!currentPathIsQuestion && <NavToggle onClick={this.toggleMenuVisibility} />}
        <ul>
          {!currentPathIsQuestion && (
            <React.Fragment>
              <LinkItem exact to="/" onClick={this.hideMenu}>
                Home
              </LinkItem>
              <LinkItem to="/add" onClick={this.hideMenu}>
                Add question
              </LinkItem>
              <LinkItem to="/leaderboard" onClick={this.hideMenu}>
                Leaderboard
              </LinkItem>
              <LogoutItem username={username} onClick={this.logout} />
            </React.Fragment>
          )}

          {currentPathIsQuestion && (
            <LinkItem to="/questions" onClick={this.navigateToHome}>
              Go Back
            </LinkItem>
          )}
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
