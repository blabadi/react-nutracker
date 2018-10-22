import React, { Component } from 'react'

import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import {   
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect 
} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Dashboard from './containers/Dashboard'
import {Login} from './containers/Login'
import Profile from './containers/Profile';
import { AuthStore } from './repos/UserRepo';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

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

class App extends Component {
  routerOutput() {
      return (
          <div className="content">
            <Switch>
              <Redirect from="/" exact  to="/dashboard" />
              <PrivateRoute path="/profile" component={Profile}></PrivateRoute>
              <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
              <Route path="/login" component={Login}></Route>
            </Switch>
          </div>
        );
  }

  renderNav(){
    console.log("in nav");
    if (AuthStore.isAuthenticated) {
      return (<ul>
        <li>
          <Link to="/dashboard">Public Page</Link>
        </li>
        <li>
          <Link to="/profile">Protected Page</Link>
        </li>
      </ul>)
    }
  }
  render() {
    console.log('in render app');
    return (
      <Provider store={store}>
        <Router>
          <div className="App container">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to NuTracker</h1>
            </header>
            {this.renderNav()}
            {this.routerOutput()}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
