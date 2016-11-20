import React, { Component } from 'react'
import NewJobForm from '../jobs/newjob-form'

class NewJobModal extends Component {
  render () {
    return (
      <div id='newJobModal' className='modal fade bs-example-modal-lg alerts' tabIndex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>
        <div className='modal-dialog modal-sm' role='document'>
          <div className='modal-content'>
            <div className='row'>
              <div className='col-md-12'>
                <NewJobForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewJobModal
