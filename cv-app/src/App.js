import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import Header from "./Components/Dashboard/Header"
import Profile from "./Components/Profile"
import CompanyDetails from "./Components/CompanyDetails"
import JobDetails from "./Components/JobDetails"

function App() {
  return (
    /*<Router>
      <Route exact path = "/" component = {SignUp} />
      <Route exact path = "/login" component = {Login} />
      <Route exact path = "/dashboard" component = {Header} />
      <Route exact path = "/profile" component = {Profile} />
      <Route exact path = "/company" component = {CompanyDetails} />
    </Router>*/
    <JobDetails/>
  );
}

export default App;
