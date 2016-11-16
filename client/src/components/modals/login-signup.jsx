import React, { Component } from 'react'
import _jobService from '../../network/jobs'
import LoginForm from '../login/login-form'
import SignUpForm from '../signup/signup-form'

class LoginSignupModal extends Component {
  render () {
    return (
      <div id='signupModal' className='modal fade bs-example-modal-lg alerts' tabIndex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <LoginForm />
            <SignUpForm />
          </div>
        </div>
      </div>
    )
  }
}

export default LoginSignupModal
