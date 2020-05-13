import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link, withRouter } from 'react-router-dom'
import { checkAuth } from "../Router";

class Navigation extends React.Component {
  render() {
    console.log("NAVIGATION");
    return (

      <AppBar position="relative">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: "1" }} className="shopName">
            Food Trucks Tracker
      </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/search">Search</Link>
            </li>
            {
              checkAuth() ? (
                <li className="nav-list-item">
                  <Link to="/setting">Setting</Link>
                </li >
              ) : null
            }
            {
              checkAuth() ? (
                <li className="nav-list-item">
                  <Link to="/favorites">Favorites</Link>
                </li >
              ) : null
            }
            <li className="nav-list-item"
              onClick={() => {
                document.cookie = "loggedIn="
              }}>
              <Link to="/login">{checkAuth() ? "Logout" : "Login"}</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>

    )
  }
}

export default withRouter(Navigation);