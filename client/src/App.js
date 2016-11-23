import React, { Component } from 'react'

// components
import NavBar from './components/navbar/navbar'
// import Dashboard from './components/dashboard/dashboard'
import VisibleDashboard from './redux/containers/dashboard'
import './App.css'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import Login from './components/login/login'

// router?artifact should prob be removed
import { Router, Route, hashHistory, browserHistory} from 'react-router'

// services
import _authService from './network/auth'

// toast
import Notifications, {notify} from 'react-notify-toast'

// redux
import { connect }  from 'react-redux'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import buildItApp from './redux/reducers'

const store = createStore(buildItApp,applyMiddleware(thunk))

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
        // browserHistory.push('/')
        break
      case 'dashboard':
        // browserHistory.push('/dashboard')
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
        <Provider store={store}>
          <VisibleDashboard />
        </Provider>
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
