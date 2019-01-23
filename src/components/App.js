import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './login/Login';
import Navigation from './navigation/Navigation';
import Home from './home/Home';
import AddQuestion from './add-question/AddQuestion';

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
            <Route exact path="/" component={Home} />
            <Route exact path="/add-question" component={AddQuestion} />
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
