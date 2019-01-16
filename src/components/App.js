import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './login/Login';

class App extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.logged) {
      return <Login />;
    }

    return <h1>{auth.username}</h1>;
  }
}

const stateToProps = state => ({
  auth: state.auth
});

export default connect(stateToProps)(App);
