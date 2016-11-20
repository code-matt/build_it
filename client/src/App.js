import React, { Component } from 'react'
import NavBar from './components/navbar/navbar'
import './App.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import Login from './components/login/login'
import Dashboard from './components/dashboard/dashboard'
import { Router, Route, hashHistory, browserHistory} from 'react-router'
import _authService from './network/auth'
import Notifications, {notify} from 'react-notify-toast'

class App extends Component {
  constructor () {
    super()
    this.state = {
      loggedIn: false
    }
  }
  navigate (data) {
    var $ = window.$
    switch (data) {
      case 'logout':
        _authService.logout()
        notify.show('Successfully logged out.', 'success', 2000)
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
  // onEnter={requireAuth}
  render () {
    return (
      <div>
        <div className='main'>
          <Notifications />
        </div>
        <Router history={browserHistory}>
          <Route path='/' component={Dashboard} />
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
