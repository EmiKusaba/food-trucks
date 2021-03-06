import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from "./containers/Home";
import LogIn from './containers/LogIn'
import Details from './containers/Details'
import cookie from 'cookie'

export const checkAuth = () => {
  // Check cookie
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => checkAuth()
        ? <Component {...props} />
        : <Redirect to="/login" />}
    />
  )
}

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/shop/:id" component={Details} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
};

export default Router;