import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Baz from './components/baz/baz'
import './index.css'
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/baz" component={Baz}/>
    </Router>
  </div>,
  document.getElementById('root')
)
