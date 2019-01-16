import React, { Component } from 'react';

import './login.scss';
import InputField from '../shared/input-field/InputField';
import Button from '../shared/button/Button';

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

    console.log(this.state);
  };

  render() {
    const { username, password } = this.state;
    return (
      <section className="login">
        <form autoComplete="off" onSubmit={this.handleFormSubmit}>
          <header className="content content--red">
            <h1>Login area</h1>
          </header>

          <div className="content content--grey">
            <InputField
              placeholder="username"
              label="Username"
              id="username"
              type="text"
              value={username}
              onChange={event => this.updateField(event, 'username')}
            />

            <InputField
              placeholder="password"
              label="Password"
              id="password"
              type="password"
              value={password}
              onChange={event => this.updateField(event, 'password')}
            />

            <Button>Submit</Button>
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
