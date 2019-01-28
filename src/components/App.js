import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './login/Login';
import Navigation from './navigation/Navigation';
import Home from './home/Home';
import AddQuestion from './add-question/AddQuestion';
import Leaderboard from './leaderboard/Leaderboard';
import Question from './question/Question';
import NotFound from './shared/not-found/NewFound';

import { QuestionAction } from '../state/actions/questions';
import { UserAction } from '../state/actions/users';

class App extends Component {
  componentDidMount() {
    this.props.fetchAllQuestions();
    this.props.fetchAllUsers();
  }

  render() {
    const { auth } = this.props;
    if (!auth.logged) {
      return <Login />;
    }

    return (
      <BrowserRouter basename="/nano-degree-would-you-rather/">
        <div className="main-container">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={AddQuestion} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/questions/:id" component={Question} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const stateToProps = state => ({
  auth: state.auth
});

const dispatchToProps = dispatch => ({
  fetchAllQuestions: () => {
    dispatch(QuestionAction.fetchAllQuestions());
  },
  fetchAllUsers: () => dispatch(UserAction.fetchAllUsers())
});

export default connect(
  stateToProps,
  dispatchToProps
)(App);
