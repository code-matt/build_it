import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import renderErrors from '../shared/renderErrors'

class FinishProfileModal extends Component {

  constructor () {
    super()
    this.handleToggle = this.handleToggle.bind(this)
    this.handleProfileEdit = this.handleProfileEdit.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
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
        var url = response.body.upload + '?' + new Date().getTime()
        this.props.changeModalCB(
          url,
          'picUrl',
          'profileModal'
        )
        this.props.editPicCB(url)
      }
    })
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
                <div className='col-md-12'>
                  <div className='card'>
                    <div className='card-header text-md-center'>
                      <div className=''>
                        <div onClick={this.handleToggle} className='closebutton btn-danger' href='#'>
                          <i className='fa fa-window-close-o'>
                          </i>
                        </div>
                      </div>
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
                          {this.props.profile.picUrl
                          ? <div>
                            <img className='img-fluid' src={this.props.profile.picUrl} />
                          </div>
                          : <div>
                            <h5 className='text-md-center'>Click here or drop image to add profile picture</h5>
                          </div>}
                        </Dropzone>
                        { renderErrors(this.props.errors.profile, 'avatar') }
                        <form onSubmit={this.handleProfileEdit}>
                          <ul className='list-group list-group-flush login-list'>
                            <div class='input-group'>
                              <span class='input-group-addon' id='basic-addon1'><i className='fa fa-id-badge fa-2x' aria-hidden='true' /></span>
                              <input onChange={this.handleValueChange} id='firstName' ref='firstName' placeholder='First Name' defaultValue={this.props.profile.firstName} type='text' class='form-control' aria-describedby='basic-addon1' />
                            </div>
                            { renderErrors(this.props.errors.profile, 'first_name') }
                            <div class='input-group'>
                              <span class='input-group-addon' id='basic-addon2'><i className='fa fa-id-badge fa-2x' aria-hidden='true' /></span>
                              <input onChange={this.handleValueChange} id='lastName' ref='lastName' placeholder='Last Name' defaultValue={this.props.profile.lastName} type='text' class='form-control' aria-describedby='basic-addon2' />
                            </div>
                            { renderErrors(this.props.errors.profile, 'last_name') }
                            <div class='input-group'>
                              <span class='input-group-addon' id='basic-addon3'><i className='fa fa-id-badge fa-2x' aria-hidden='true' /></span>
                              <input onChange={this.handleValueChange} id='location' ref='location' placeholder='Location' defaultValue={this.props.profile.location} type='text' class='form-control' aria-describedby='basic-addon2' />
                            </div>
                            { renderErrors(this.props.errors.profile, 'location') }
                            <button className={'btn btn-primary searchbtn'} type='submit'>Submit</button>
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

FinishProfileModal.propTypes = {
  changeModalCB: React.PropTypes.func,
  editPicCB: React.PropTypes.func,
  editProfileCB: React.PropTypes.func
}

export default FinishProfileModal
