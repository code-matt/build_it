import React, { Component } from 'react'
// container
import VisibleDashboard from './redux/containers/dashboard'

// :i
import './App.css'

// toast // need to reimplement
import Notifications from 'react-notify-toast'

// redux
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

export default App
