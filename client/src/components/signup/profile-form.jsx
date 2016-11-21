import React, { Component } from 'react'
import _authService from '../../network/auth'
import Notifications, {notify} from 'react-notify-toast'
import Dropzone from 'react-dropzone'
import request from 'superagent'

class ProfileForm extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getCurrentProfile = this.getCurrentProfile.bind(this)
    this.state = {
      errors: [],
      avatarUrl: undefined,
      loading: false
    }
  }

  getCurrentProfile () {
    var component = this
    _authService.profile()
      .then((res) => {
        if (res) {
          component.refs.firstName.value = res.response.firstName
          component.refs.lastName.value = res.response.lastName
          component.refs.location.value = res.response.location
          component.setState({
            avatarUrl: res.response.picUrl + '?' + new Date().getTime()
          })
          notify.show('Profile loaded', 'success', 700)
        } else {
          notify.show('Error loading profile details? :/', 'error', 2000)
        }
      })
  }

  handleSubmit (event) {
    var $ = window.$
    event.preventDefault()
    var component = this
    _authService.finish(
      this.refs.firstName.value,
      this.refs.lastName.value,
      this.refs.location.value)
      .then((res) => {
        if (res.profileComplete) {
          $('#profileModal').modal('hide')
          notify.show('Profile Edited Successfully', 'success', 2000)
        } else {
          notify.show('Errors submitting profile :(', 'error', 2000)
          this.setState({
            errors: component.handleErrors(res.errors)
          })
        }
      }
    )
  }

  handleErrors (errors) {
    var arr = []
    for (let error in errors) {
      var div = error
      var errorArr = errors[error]
      for (let err in errorArr) {
        arr.push({
          div: div,
          message: errorArr[err]
        })
      }
    }
    return arr
  }

  onImageDrop (files) {
    this.setState({
      loading: true,
      avatarUrl: ''
    })
    let upload = request.post('http://localhost:3000/api/v1/profilepic')
                        .field('file', files[0])
                        .set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    upload.end((err, response) => {
      if (err) {
        console.error(err)
        this.setState({
          loading: false
        })
      }

      if (response.body.upload) {
        this.setState({
          avatarUrl: response.body.upload + '?' + new Date().getTime(),
          loading: false
        })
      }
    })
  }

  spinnerClassToggle (spin) {
    if (spin) {
      return 'btn btn-primary searchbtn has-spinner active'
    } else {
      return 'btn btn-primary searchbtn has-spinner'
    }
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
        { renderErrors(this.state.errors, 'avatar') }
        <form onSubmit={this.handleSubmit}>
          <label><input ref='firstName' placeholder='First Name' /></label>
          { renderErrors(this.state.errors, 'first_name') }
          <label><input ref='lastName' placeholder='Last Name' /></label>
          { renderErrors(this.state.errors, 'last_name') }
          <label><input ref='location' placeholder='Location' /></label><br />
          { renderErrors(this.state.errors, 'location') }
          <button className={this.spinnerClassToggle(this.state.loading)} type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

function renderErrors (errors, section) {
  if (errors.length > 0) {
    return errors.map((error, index) => (
      error.div === section ? <Error key={index} error={error} /> : null
  )) } else {
    return []
  }
}

const Error = ({error}) => {
  return (
    <div className='alert alert-danger' role='alert'>
      <strong>{error.message}</strong>
    </div>
    )
}

export default ProfileForm
