import React, { Component } from 'react'

// components
import NavBar from './components/navbar/navbar'
import VisibleDashboard from './redux/containers/dashboard'
import './App.css'

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
  componentWillReceiveProps (nextProps) {
    this.setState({
      children: nextProps.children
    })
  }
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
