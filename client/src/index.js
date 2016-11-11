import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Dashboard from './components/dashboard/dashboard'
import './index.css'
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/dashboard" component={Dashboard}/>
    </Router>
  </div>,
  document.getElementById('root')
)
