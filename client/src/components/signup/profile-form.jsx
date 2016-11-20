import React, { Component } from 'react'
import _authService from '../../network/auth'
import Notifications, {notify} from 'react-notify-toast'
import Dropzone from 'react-dropzone'
import request from 'superagent'

class ProfileForm extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {errors: [],
      avatarUrl: undefined
    }
  }

  handleSubmit (event) {
    var $ = window.$
    event.preventDefault()
    _authService.finish(
      this.refs.firstName.value,
      this.refs.lastName.value,
      this.refs.location.value,
      function (res) {
        if (res.profileComplete) {
          $('#profileModal').modal('hide')
          notify.show('Profile Edited Successfully', 'success', 2000)
        } else {
          notify.show('Errors submitting profile :()', 'error', 2000)
        }
      }
    )
  }

  onImageDrop (files) {
    let upload = request.post('http://localhost:3000/api/v1/profilepic')
                        .field('file', files[0])
                        .set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    upload.end((err, response) => {
      if (err) {
        console.error(err)
      }

      if (response.body.upload) {
        this.setState({
          avatarUrl: response.body.upload
        })
      }
    })
  }

  render () {
    return (
      <div className='text-md-center profileform'>
        We need to know a little more about you..
        <Dropzone
          className='dropzone'
          multiple={false}
          accept='image/*'
          onDrop={this.onImageDrop.bind(this)}>
          {!this.state.avatarUrl ? <p>Drop an image or click to select a file to upload.</p> :
            <div>
              <img className='img-fluid' src={this.state.avatarUrl} />
            </div>}
        </Dropzone>
        <form onSubmit={this.handleSubmit}>
          <label><input ref='firstName' placeholder='First Name' /></label>
          <label><input ref='lastName' placeholder='Last Name' /></label>
          <label><input ref='location' placeholder='Location' /></label><br />
          <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default ProfileForm
