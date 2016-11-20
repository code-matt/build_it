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
    var component = this

    _authService.create(email, pass, (loggedIn, errors, err) => {
      if (localStorage.token) {
        $('#signupModal').modal('hide')
        notify.show('SignUp Successful!', 'success', 2000)
        this.props.loginCB(true)
      } else {
        notify.show('SignUp Failure! :()', 'error', 2000)
        component.setState({
          errors: component.handleErrors(errors.errors)
        })
      }
    })
  }
  handleErrors (errors) {
    var arr = []
    for (let error in errors) {
      var div = error
      var errorArr = errors[error]
      for (let err in errorArr) {
        arr.push({
          div: div,
          message: errorArr[err]
        })
      }
    }
    return arr
  }

  render () {
    return (
      <div className='text-md-center signup'>
        Sign Up!
        <form onSubmit={this.handleSubmit}>
          <label><input ref='email' placeholder='Valid Email' /></label>
          { renderErrors(this.state.errors, 'email') }
          <label><input ref='pass' placeholder='Password' /></label><br />
          { renderErrors(this.state.errors, 'password') }
          <button className='btn btn-primary' type='submit'>SignUp</button>
        </form>
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
    <div className='alert alert-danger formerror' role='alert'>
      <strong>{error.message}</strong>
    </div>
    )
}

export default SignUpForm

SignUpForm.propTypes = {
  loginCB: React.PropTypes.func,
}
