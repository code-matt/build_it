import React, { Component } from 'react'
import _jobService from '../../network/jobs'
import LoginForm from '../login/form'
import SignUpForm from '../signup/form'

class LoginModal extends Component {
  render () {
    return (
      <div id='loginModal' className='modal fade bs-example-modal-lg alerts' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <LoginForm />
          </div>
        </div>
      </div>
    )
  }
}

export default LoginModal
