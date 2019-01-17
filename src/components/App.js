import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Login from './login/Login';
import Navigation from './navigation/Navigation';

class App extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.logged) {
      return <Login />;
    }

    return (
      <BrowserRouter>
        <div className="main-container">
          <Navigation />
          <div>
            <Login />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const stateToProps = state => ({
  auth: state.auth
});

export default connect(stateToProps)(App);
