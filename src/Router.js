import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
// import LogIn from './containers/LogIn'
// import Listings from './containers/Listings'
// import Details from './containers/Details'
// import AddShop from "./containers/AddShop";
import cookie from 'cookie'

export const checkAuth = () => {
  // Check cookie
  const cookies = cookie.parse(document.cookie)
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

const Router = () => {
  return (
    <Switch>
      {/* <Route path="/search" component={Search} />
      <Route path="/setting" component={Setting} />
      <Route path="/favorits" component={Details} /> */}
      {/* <ProtectedRoute path="/add" component={AddShop} />  */}

    </Switch>
  );
};

export default Router;