import React,{Component} from 'react'
import './App.css'
import { Router, Route, Link, IndexRoute, hashHistory,browserHistory} from 'react-router'
//import browserHistory from 'react-router-dom'

import Login from "./Components/Login"
import SignUp from "./Components/SignUp"

function App() {
  return (
    <SignUp />
  );
}

// class App extends Component{
//   render(){
//     return(

//     )
//   }

// }

export default App;
