import React, { Component } from 'react'
import {
  TextField,
  Button,
  Container,
  Link
} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from "@material-ui/core/styles";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      www.foodtrackstrucker.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});


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
    console.log("WHAG");
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
    document.cookie = "loggedIn=false;"
    this.props.setUser(null)
    //this.props.history.push("/");
  }
  render() {
    console.log(this.props.user);
    const { classes } = this.props;
    return (
      <div className="App">
        <Container component="main" maxWidth="sm" >
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
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
                color="secondary">Log In</Button>

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Grid container>
                <Grid item sm={6}>
                  <Link href="#" color="secondary" variant="body2">
                    Forgot password?
              </Link>
                </Grid>
                <br/>
                <Grid item item sm={6}>
                  <Link href="#" color="secondary" variant="body2">
                    Don't have an account? Sign Up
                </Link>
                </Grid>
              </Grid>
              <h3>or</h3>
              <Link to="/" color="secondary" variant="body2">Enter as Guest</Link>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(LogIn);