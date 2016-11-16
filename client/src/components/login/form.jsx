import React, { Component } from 'react'
import { Link } from 'react-router'
import NavBar from '../navbar/navbar'
import Notifications, {notify} from 'react-notify-toast'

import _authService from '../../network/auth'

var LoginForm = React.createClass({
  handleSubmit (event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value
    const $ = window.$

    _authService.login(email, pass, (loggedIn) => {
      // const { location } = this.props

      // if (location.state && location.state.nextPathname) {
      //   this.props.router.replace(location.state.nextPathname)
      // } else {
      //   this.props.router.replace('/')
      // }
      if (localStorage.token) {
        $('#signupModal').modal('hide')
        notify.show('Login Successful!', 'success', 2000)
      } else {
        // $('#signupModal').modal('hide')
        notify.show('Login Failure :()', 'error', 2000)
      }
    })
  },

  render () {
    return (
      <div>
        <div>
          Already a member? Sign in
          <form onSubmit={this.handleSubmit}>
            <label><input ref='email' placeholder='email' defaultValue='joe@example.com' /></label>
            <label><input ref='pass' placeholder='password' /></label> (hint: password1)<br />
            <button type='submit'>login</button>
          </form>
        </div>
      </div>
    )
  }
})

export default LoginForm
