import React, { Component } from 'react'
import JobDetails from '../jobs/view-job'

class JobModal extends Component {
  render () {
    return (
      <div id='jobModal' className='modal fade bs-example-modal-lg alerts' tabIndex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <JobDetails />
          </div>
        </div>
      </div>
    )
  }
}

export default JobModal
