import React, { Component } from 'react'
import { Link } from 'react-router'
import NavBar from '../navbar/navbar'
import Notifications, {notify} from 'react-notify-toast'

import _authService from '../../network/auth'

class LoginForm extends Component {
  constructor () {
    super()
    this.state = {
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (event) {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value
    const $ = window.$

    _authService.login(email, pass, (loggedIn, errors) => {
      if (localStorage.token) {
        this.props.loginCB(true)
        this.setState({errors: []})
        $('#signupModal').modal('hide')
        notify.show('Login Successful!', 'success', 2000)
      } else {
        this.props.loginCB(false)
        console.log(errors)
        this.setState({errors: errors})
        notify.show('Login Failure :(', 'error', 2000)
      }
    })
  }
  render () {
    return (
      <div className='container'>
        <div className='text-md-center signup'>
          <div>
            Already a member? Sign in
            <form onSubmit={this.handleSubmit}>
              { renderErrors(this.state.errors, 'non-specific') }
              <label><input ref='email' placeholder='Valid Email' /></label>
              <label><input ref='pass' placeholder='Password' /></label><br />
              <button className='btn btn-primary' type='submit'>login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function renderErrors (errors, section) {
  if (errors.length > 0) {
    return errors.map((error, index) => (
      error.div === section ? <Error key={index} error={error} /> : null
  )) } else {
    return []
  }
}

const Error = ({error}) => {
  return (
    <div className='alert alert-danger' role='alert'>
      <strong>{error.message}</strong>
    </div>
    )
}

export default LoginForm

LoginForm.propTypes = {
  loginCB: React.PropTypes.func
}
