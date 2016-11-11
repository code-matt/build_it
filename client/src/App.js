import React, { Component } from 'react'
import logo from './logo.svg'
import NavBar from './components/navbar/navbar'
import './App.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './components/login/login'

class App extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <h2>Build.It</h2>
        <Login />
      </div>

    )
  }
}

export default App
