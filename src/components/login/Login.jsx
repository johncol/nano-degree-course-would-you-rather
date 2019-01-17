import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputField from '../shared/input-field/InputField';
import Button from '../shared/button/Button';
import { AuthAction } from '../../state/actions/auth';

import './login.scss';

const LoginHeader = () => (
  <header className="content content--red">
    <h1>Login area</h1>
  </header>
);

const LoginResult = ({ auth }) => {
  if (!auth.error) {
    return null;
  }
  return <p className="login__result">{auth.error}</p>;
};

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  updateField = (event, field) => {
    this.setState({
      [field]: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    const { username, password } = this.state;
    const { auth } = this.props;
    return (
      <form className="login" autoComplete="off" onSubmit={this.handleFormSubmit}>
        <LoginHeader />

        <div className="content content--grey">
          <LoginResult auth={auth} />

          <InputField
            label="Username"
            id="username"
            type="text"
            value={username}
            onChange={event => this.updateField(event, 'username')}
          />

          <InputField
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange={event => this.updateField(event, 'password')}
          />

          <Button>Submit</Button>
        </div>
      </form>
    );
  }
}

const stateToProps = state => ({
  auth: state.auth
});

const dispatchToProps = dispatch => ({
  login: (username, password) => dispatch(AuthAction.login(username, password))
});

export default connect(
  stateToProps,
  dispatchToProps
)(Login);
