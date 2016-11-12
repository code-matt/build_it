import React, { Component } from 'react'
import NavBar from './components/navbar/navbar'
import './App.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from './components/login/login'
import Dashboard from './components/dashboard/dashboard'
import { Router, Route, hashHistory, browserHistory} from 'react-router'
import _authService from './network/auth'

class App extends Component {
  constructor () {
    super()
    this.state = {
      loggedIn: false
    }
  }
  navigate (data) {
    switch (data) {
      case 'logout':
        _authService.logout()
        browserHistory.push('/')
        break
      case 'login':
        browserHistory.push('/')
        break
      case 'dashboard':
        browserHistory.push('/dashboard')
        break
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      children: nextProps.children
    })
  }
  render () {
    return (
      <div>
        <NavBar navigateFunc={this.navigate.bind(this)} />
        <Router history={browserHistory}>
          <Route path='/' component={Login} />
          <Route path='/dashboard' component={Dashboard} onEnter={requireAuth} />
        </Router>
      </div>
    )
  }
}
function requireAuth (nextState, replace) {
  if (!_authService.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default App
