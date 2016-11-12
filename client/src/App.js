import React, { Component } from 'react'
import NavBar from './components/navbar/navbar'
import './App.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './components/login/login'
import Dashboard from './components/dashboard/dashboard'
import { Router, Route, hashHistory } from 'react-router'

class App extends Component {
  render () {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Router>
      </div>

    )
  }
}

export default App
