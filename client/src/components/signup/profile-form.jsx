import React, { Component } from 'react'
import _authService from '../../network/auth'
import Notifications, {notify} from 'react-notify-toast'

class ProfileForm extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {errors: []}
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('profile submitted')
  }

  render () {
    return (
      <div>
        We need to know a little more about you..
        <form onSubmit={this.handleSubmit}>
          <label><input ref='firstName' placeholder='firstName' defaultValue='First Name' /></label>
          <label><input ref='lastName' placeholder='lastName' defaultValue='Last Name'  /></label><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default ProfileForm
