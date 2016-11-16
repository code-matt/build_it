import React, { Component } from 'react'
import _authService from '../../network/auth'
import Notifications, {notify} from 'react-notify-toast'
import Dropzone from 'react-dropzone'
import request from 'superagent';

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

  onImageDrop (files) {
    let upload = request.post('http://localhost:3000/api/v1/profilepic')
                        .field('file', files[0])

    upload.end((err, response) => {
      if (err) {
        console.error(err)
      }

      if (response.body.secure_url !== '') {
        console.log(response.body)
      }
    })
  }

  render () {
    return (
      <div>
        We need to know a little more about you..
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}>
          <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
        <form onSubmit={this.handleSubmit}>
          <label><input ref='firstName' placeholder='firstName' defaultValue='First Name' /></label>
          <label><input ref='lastName' placeholder='lastName' defaultValue='Last Name'  /></label>
          <label><input ref='location' placeholder='location' defaultValue='Location'  /></label><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default ProfileForm
