import React,{Component} from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import Header from "./Components/Dashboard/Header"

function App() {
  return (
    <Router>
      <Route exact path = "/" component={SignUp} />
      <Route exact path = "/login" component={Login} />
      <Route exact path = "/dashboard" component={Header} />
    </Router>
    //<SignUp/>
  );
}

export default App;
