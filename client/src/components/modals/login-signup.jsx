import React, { Component } from 'react'
import renderErrors from '../shared/renderErrors'

import './login-signup.css'

class LoginSignupModal extends Component {
  constructor () {
    super()
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle (event) {
    event.preventDefault()
    this.props.closeCB()
  }

  handleLogin (event) {
    event.preventDefault()
    this.props.loginCB()
  }

  handleSignup (event) {
    event.preventDefault()
    this.props.signupCB()
  }

  handleValueChange (event) {
    this.props.valueChangeCB(event.target.value, event.target.id, 'signupModal')
  }

  render () {
    return (
      <div ref='modal' id='signupModal' className='modal fade bs-example-modal-lg alerts signup' tabIndex='-1' role='dialog' aria-labelledby='myLargeModalLabel' data-backdrop='static' data-keyboard='false'>
        <div className='modal-dialog modal-sm' role='document'>
          <div className='modal-content'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='card'>
                    <div className='card-header'>
                      <div className=''>
                        <div onClick={this.handleToggle} className='closebutton btn-danger' href='#'>
                          <i className='fa fa-window-close-o'>
                          </i>
                        </div>
                      </div>
                      <div className='text-md-center'>
                        <div>
                          <h3> Sign In </h3>
                        </div>
                      </div>
                    </div>
                    <div className='card-block text-md-center'>
                      <form onSubmit={this.handleLogin}>
                        { renderErrors(this.props.errors.signup, 'non-specific') }     
                        <div className='input-group'>
                          <span className='input-group-addon' id='basic-addon4'><i className='fa fa-id-badge fa-2x' aria-hidden='true' /></span>
                          <input onChange={this.handleValueChange} id='loginEmail' ref='email' placeholder='Valid Email' type='text' className='form-control' aria-describedby='basic-addon4' />
                        </div>
                        <div className='input-group'>
                          <span className='input-group-addon' id='basic-addon5'><i className='fa fa-id-badge fa-2x' aria-hidden='true' /></span>
                          <input onChange={this.handleValueChange} id='loginPassword' ref='password' placeholder='Password' type='text' className='form-control' aria-describedby='basic-addon5' />
                        </div>
                        <button className='btn btn-primary login-button' type='submit'>Login</button>
                      </form>
                    </div>
                    <hr />
                    <div className='card-block text-md-center'>
                      <div className='smallHeader'>
                        <h3>Sign Up!</h3>
                      </div>
                      <form onSubmit={this.handleSignup}>
                        <div className='input-group'>
                          <span className='input-group-addon' id='basic-addon7'><i className='fa fa-id-badge fa-2x' aria-hidden='true' /></span>
                          <input onChange={this.handleValueChange} id='signupEmail' ref='email' placeholder='Valid Email' type='text' className='form-control' aria-describedby='basic-addon7' />
                        </div>
                        { renderErrors(this.props.errors.signup, 'email') }
                        <div className='input-group'>
                          <span className='input-group-addon' id='basic-addon6'><i className='fa fa-id-badge fa-2x' aria-hidden='true' /></span>
                          <input onChange={this.handleValueChange} id='signupPassword' ref='password' placeholder='Password' type='text' className='form-control' aria-describedby='basic-addon6' />
                        </div>
                        { renderErrors(this.props.errors.signup, 'password') }
                        <button className='btn btn-primary login-button' type='submit'>SignUp</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
)
  }
}

export default LoginSignupModal

LoginSignupModal.propTypes = {
  loginCB: React.PropTypes.func,
  signupCB: React.PropTypes.func,
  valueChangeCB: React.PropTypes.func,
  closeCB: React.PropTypes.func
}

