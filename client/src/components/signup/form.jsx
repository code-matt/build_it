import React, { Component } from 'react'
import _authService from '../../network/auth'

class SignUpForm extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    _authService.create(email, pass, (loggedIn) => {
      // toast 
    })
  }

  render () {
    return (
      <div>
        Sign Up!
        <form onSubmit={this.handleSubmit}>
          <label><input ref='email' placeholder='email' defaultValue='valid e-mail' /></label>
          <label><input ref='pass' placeholder='password' /></label> (hint: password1)<br />
          <button type='submit'>SignUp</button>
        </form>
      </div>
    )
  }
}

export default SignUpForm