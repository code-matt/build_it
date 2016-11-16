import React, { Component } from 'react'
import _jobService from '../../network/jobs'
import Login from '../login/login'
import SignUpForm from './form'

class SignUp extends Component {
  render () {
    return (
      <div id='signupModal' className='modal fade bs-example-modal-lg alerts' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <Login />
            <SignUpForm />
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
