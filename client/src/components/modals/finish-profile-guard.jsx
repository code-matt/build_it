import React, { Component } from 'react'
import _jobService from '../../network/jobs'
import ProfileForm from '../signup/profile-form'

class FinishProfileModal extends Component {
  render () {
    return (
      <div id='profileModal' className='modal fade bs-example-modal-lg alerts' tabIndex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <ProfileForm />
          </div>
        </div>
      </div>
    )
  }
}

export default FinishProfileModal