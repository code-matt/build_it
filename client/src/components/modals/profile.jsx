import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import renderErrors from '../shared/renderErrors'

import './profile.css'

class EditProfileModal extends Component {

  constructor () {
    super()
    this.handleToggle = this.handleToggle.bind(this)
    this.handleProfileEdit = this.handleProfileEdit.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.isLoading = this.isLoading.bind(this)
  }

  onImageDrop (files) {
    this.props.valueChangeCB(true, 'loading', 'profileModal')
    var urlPath = '/api/v1/profilepic'
    let upload = request.post(process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_PROD_HOST + urlPath
      : process.env.REACT_APP_DEV_HOST + urlPath)
                        .field('file', files[0])
                        .set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    upload.end((err, response) => {
      if (err) {
        console.error(err)
        this.props.uiActions.changeModal(false, 'loading', 'profileModal')
      }

      if (response.body.upload) {
        var url = response.body.upload + '?' + new Date().getTime()
        this.props.changeModalCB(
          url,
          'picUrl',
          'profileModal'
        )
        this.props.editPicCB(url)
        this.props.valueChangeCB(false, 'loading', 'profileModal')
      }
    })
  }

  isLoading () {
    if (this.props.modalsState.profileModal.loading) {
      return (
        <div>
          <div className='fa fa-spinner fa-spin fa-3x' />
        </div>
      )
    } else {
      return (
        <div>
          <h5 className='text-md-center'>Click here or drop image to add profile picture</h5>
        </div>
      )
    }
  }

  componentWillMount () {
    this.props.valueChangeCB(this.props.profile.firstName, 'firstName', 'profileModal')
    this.props.valueChangeCB(this.props.profile.lastName, 'lastName', 'profileModal')
    this.props.valueChangeCB(this.props.profile.location, 'location', 'profileModal')
  }

  handleProfileEdit (event) {
    event.preventDefault()
    this.props.editProfileCB()
  }

  handleToggle (event) {
    event.preventDefault()
    this.props.closeCB()
  }

  handleValueChange (event) {
    this.props.valueChangeCB(event.target.value, event.target.id, 'profileModal')
  }

  render () {
    return (
      <div id='profileModal' className='modal fade bs-example-modal-sm alerts' tabIndex='-1' role='dialog' aria-labelledby='myLargeModalLabel' data-backdrop='static' data-keyboard='false'>
        <div className='modal-dialog modal-sm' role='document'>
          <div className='modal-content'>
            <div className='container'>
              <div className='row'>
                <div onClick={this.handleToggle} className='closebutton-lgmodal btn-danger pull-right' href='#'>
                  <i className='fa fa-window-close-o' />
                </div>
                <div className='col-md-12'>
                  <div className='card'>
                    <div className='card-header text-md-center'>
                      <h4>Edit Profile</h4>
                    </div>
                    <div className='card-block'>
                      <div className='text-md-center profileform'>
                        We need to know a little more about you..
                        <Dropzone
                          className='dropzone'
                          multiple={false}
                          accept='image/*'
                          onDrop={this.onImageDrop.bind(this)}>
                          {this.props.profile.picUrl && this.props.modalsState.profileModal.loading === false
                            ? <div>
                              <img className='img-fluid' src={this.props.profile.picUrl} />
                            </div>
                            : this.isLoading()
                          }
                        </Dropzone>
                        { renderErrors(this.props.errors.profile, 'avatar') }
                        <form onSubmit={this.handleProfileEdit}>
                          <ul className='list-group list-group-flush login-list'>
                            <div className='input-group'>
                              <span className='input-group-addon' id='basic-addon1'><i className='fa fa-id-badge fa-2x' aria-hidden='true' /></span>
                              <input onChange={this.handleValueChange} id='firstName' ref='firstName' placeholder='First Name' defaultValue={this.props.profile.firstName} type='text' className='form-control' aria-describedby='basic-addon1' />
                            </div>
                            { renderErrors(this.props.errors.profile, 'first_name') }
                            <div className='input-group'>
                              <span className='input-group-addon' id='basic-addon2'><i className='fa fa-id-badge fa-2x' aria-hidden='true' /></span>
                              <input onChange={this.handleValueChange} id='lastName' ref='lastName' placeholder='Last Name' defaultValue={this.props.profile.lastName} type='text' className='form-control' aria-describedby='basic-addon2' />
                            </div>
                            { renderErrors(this.props.errors.profile, 'last_name') }
                            <div className='input-group'>
                              <span className='input-group-addon' id='basic-addon3'><i className='fa fa-id-badge fa-2x' aria-hidden='true' /></span>
                              <input onChange={this.handleValueChange} id='location' ref='location' placeholder='Location' defaultValue={this.props.profile.location} type='text' className='form-control' aria-describedby='basic-addon2' />
                            </div>
                            { renderErrors(this.props.errors.profile, 'location') }
                            <button className={'btn btn-primary profilebtn'} type='submit'>Submit</button>
                          </ul>
                        </form>
                      </div>
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

EditProfileModal.propTypes = {
  changeModalCB: React.PropTypes.func,
  editPicCB: React.PropTypes.func,
  editProfileCB: React.PropTypes.func
}

export default EditProfileModal
