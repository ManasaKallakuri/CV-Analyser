import React from 'react'
import './App.css'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import Login from "./Components/SignUp"

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <Login />
  );
}

export default App;
