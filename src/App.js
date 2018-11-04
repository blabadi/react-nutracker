import React, { Component } from 'react'

import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import {   
  BrowserRouter as Router,
} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Nav  from './containers/Nav';
import {routerOutput} from './routes';
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

class App extends Component {
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
            <Nav/>
            <div className="content">
              {routerOutput()}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
