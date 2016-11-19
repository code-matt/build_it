import React, { Component } from 'react'
import _authService from '../../network/auth'
import Notifications, {notify} from 'react-notify-toast'
import Dropzone from 'react-dropzone'
import request from 'superagent';

class ProfileForm extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {errors: [],
      avatarUrl: undefined
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('profile submitted')
    _authService.finish(
      this.refs.firstName.value,
      this.refs.lastName.value,
      this.refs.location.value,
      function (res) {
        console.log(res)
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
      <div>
        We need to know a little more about you..
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}>
          {!this.state.avatarUrl ? <p>Drop an image or click to select a file to upload.</p> :
            <div>
              <img className='img-responsive' src={this.state.avatarUrl} />
            </div>}
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
