import React, { Component } from 'react'
import LoginForm from '../login/login-form'
import SignUpForm from '../signup/signup-form'

class LoginSignupModal extends Component {
  render () {
    return (
      <div id='signupModal' className='modal fade bs-example-modal-lg alerts signup' tabIndex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>
        <div className='modal-dialog modal-sm' role='document'>
          <div className='modal-content'>
            <div className='row'>
              <div className='col-md-12'>
                <LoginForm />
                <hr />
                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </div>)
  }
}

export default LoginSignupModal
