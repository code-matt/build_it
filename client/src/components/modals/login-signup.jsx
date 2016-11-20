import React, { Component } from 'react'
import LoginForm from '../login/login-form'
import SignUpForm from '../signup/signup-form'

class LoginSignupModal extends Component {
  loginCB (loggedIn) {
    this.props.loginCB(loggedIn)
  }

  render () {
    return (
      <div id='signupModal' className='modal fade bs-example-modal-lg alerts signup' tabIndex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>
        <div className='modal-dialog modal-sm' role='document'>
          <div className='modal-content'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <LoginForm loginCB={this.loginCB.bind(this)} />
                  <hr />
                  <SignUpForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)
  }
}

export default LoginSignupModal

LoginSignupModal.propTypes = {
  loginCB: React.PropTypes.func
}
