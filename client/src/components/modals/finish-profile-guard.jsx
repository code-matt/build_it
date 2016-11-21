import React, { Component } from 'react'
import _jobService from '../../network/jobs'
import ProfileForm from '../signup/profile-form'

class FinishProfileModal extends Component {
  getCurrentProfile () {
    this.refs.profileForm.getCurrentProfile()
  }
  render () {
    return (
      <div id='profileModal' className='modal fade bs-example-modal-sm alerts' tabIndex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>
        <div className='modal-dialog modal-sm' role='document'>
          <div className='modal-content'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <ProfileForm ref='profileForm' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FinishProfileModal
