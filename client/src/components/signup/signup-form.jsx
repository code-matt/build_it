import React, { Component } from 'react'
import _authService from '../../network/auth'
import Notifications, {notify} from 'react-notify-toast'

class SignUpForm extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {errors: []}
  }

  handleSubmit (event) {
    var $ = window.$
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    _authService.create(email, pass, (loggedIn) => {
      if (localStorage.token) {
        $('#signupModal').modal('hide')
        notify.show('SignUp Successful!', 'success', 2000)
      } else {
        notify.show('SignUp Failure! :()', 'error', 2000)
        // change error state
      }
    })
  }
  handleErrors (errors) {
    this.setState({
      errors: errors
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
