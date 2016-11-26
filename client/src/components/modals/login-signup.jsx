import React, { Component } from 'react'
import renderErrors from '../shared/renderErrors'

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
    this.props.toggleCB()
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
                  <button onClick={this.handleToggle}>close</button>
                  <div className='container'>
                    <div className='text-md-center login'>
                      <div>
                        <div className='smallHeader'>Already a member? Sign in</div>
                        <form onSubmit={this.handleLogin}>
                          { renderErrors(this.props.errors.signup, 'non-specific') }
                          <label><input onChange={this.handleValueChange} id='loginEmail' ref='email' placeholder='Valid Email' /></label>
                          <label><input onChange={this.handleValueChange} id='loginPassword' ref='pass' placeholder='Password' /></label><br />
                          <button className='btn btn-primary' type='submit'>Login</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className='text-md-center signup'>
                    <div className='smallHeader'>Sign Up!</div>
                    <form onSubmit={this.handleSignup}>
                      <label><input onChange={this.handleValueChange} id='signupEmail' ref='email' placeholder='Valid Email' /></label>
                      { renderErrors(this.props.errors.signup, 'email') }
                      <label><input onChange={this.handleValueChange} id='signupPassword' ref='pass' placeholder='Password' /></label><br />
                      { renderErrors(this.props.errors.signup, 'password') }
                      <button className='btn btn-primary' type='submit'>SignUp</button>
                    </form>
                  </div>
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
  loginCB: React.PropTypes.func,
  signupCB: React.PropTypes.func,
  valueChangeCB: React.PropTypes.func,
  toggleCB: React.PropTypes.func
}

