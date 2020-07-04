import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link, withRouter } from 'react-router-dom'
import { checkAuth } from "../Router";

class Navigation extends React.Component {
  render() {
    return (
      <AppBar position="relative" color="primary">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }} className="shopName">
            Food Trucks Tracker
      </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-list-item"
              onClick={() => {
                document.cookie = "loggedIn="
              }}>
              <Link to="/login">{checkAuth() ? `Logout ${this.props.user.name}` : "Login"}</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(Navigation);