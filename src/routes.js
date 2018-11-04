import React from 'react'
import Dashboard from './containers/Dashboard'
import {Login} from './containers/Login'
import Profile from './containers/Profile'
import { AuthStore } from './repos/UserRepo'
import {
Route,
Switch,
Redirect 
} from 'react-router-dom'


const  renderIfAuthenticated = (Component) => props => AuthStore.isAuthenticated ? 
(<Component {...props} />) : 
(<Redirect
    to={{
      pathname: "/login",
      state: { from: props.location }
    }}
  />
)

const PrivateRoute = ({ component: Component, ...rest }) => (
<Route
  {...rest}
  render={renderIfAuthenticated(Component)}
/>
);


export const routerOutput = () =>
    (
    <Switch>
        <Redirect from="/" exact  to="/dashboard" />
        <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
        <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
        <Route path="/login" component={Login}></Route>
    </Switch>
    );
