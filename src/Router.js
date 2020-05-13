import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from "./containers/Home";
import LogIn from './containers/LogIn'
// import Listings from './containers/Listings'
// import Details from './containers/Details'
// import AddShop from "./containers/AddShop";
import cookie from 'cookie'

export const checkAuth = () => {
  // Check cookie
  const cookies = cookie.parse(document.cookie)
  console.log(cookies);
  return cookies["loggedIn"] ? true : false
}

// Write ProtectedRoute function here

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
    console.log("Router render()");
    return (
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/foo/:id" component={LogIn} />
        <Route path="/" component={Home} />
        {/* <Route path="/search" component={Search} />
      <Route path="/setting" component={Setting} />
      <Route path="/favorits" component={Details} /> */}
        {/* <ProtectedRoute path="/add" component={AddShop} />  */}

      </Switch>
    );
  }
};

export default Router;