import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './containers/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Dashboard></Dashboard>
      </div>
    );
  }
}

export default App;
