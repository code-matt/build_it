import React, { Component } from 'react'
import { Link } from 'react-router'
import NavBar from '../navbar/navbar'

import _authService from '../../network/auth'

var Login = React.createClass({
  handleSubmit (event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    _authService.login(email, pass, (loggedIn) => {
      if (!loggedIn) {
        console.log('login failed')
      } else {
        console.log('login success!')
      }

      const { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.props.router.replace(location.state.nextPathname)
      } else {
        this.props.router.replace('/dashboard')
      }
    })
  },

  render () {
    return (
      <div>
        <NavBar />
        <form onSubmit={this.handleSubmit}>
          <label><input ref='email' placeholder='email' defaultValue='joe@example.com' /></label>
          <label><input ref='pass' placeholder='password' /></label> (hint: password1)<br />
          <button type='submit'>login</button>
        </form>
      </div>
    )
  }
})

export default Login
