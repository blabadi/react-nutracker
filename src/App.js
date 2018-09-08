import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Dashboard from './containers/Dashboard'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App container">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Dashboard></Dashboard>
        </div>
      </Provider>
    );
  }
}

export default App;
