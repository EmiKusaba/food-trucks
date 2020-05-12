import React, { Component } from 'react'
import {
  TextField,
  Button,
  Container,
  Link
} from '@material-ui/core'
 

class LogIn extends Component {
  state = {
    username: '',
    password: ''
  }

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  login = (e) => {
    e.preventDefault()
    // set cookie here
    // set loggedIn = true and max-age = 60*1000 (one minute)
    document.cookie = "loggedIn=true;max-age=60*1000"
    this.props.setUser(this.state)
    this.props.history.push("/");
  }

  logout = (e) => {
    e.preventDefault()
    // set cookie here
    // set loggedIn = true and max-age = 60*1000 (one minute)
    document.cookie = "loggedIn=true;max-age=60*1000"
    this.props.setUser(null)
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password" />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary">SAVE</Button>
              <h3>or</h3>
            <Link to="/home">Guest</Link>
          </form>
        </Container>
      </div>
    );
  }
}

export default LogIn;