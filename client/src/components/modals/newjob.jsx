import React, { Component } from 'react'
import NewJobForm from '../jobs/newjob-form'

class NewJobModal extends Component {
  componentDidMount () {
    // get details
  }
  render () {
    return (
      <div id="newJobModal" className="modal fade bs-example-modal-lg alerts" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <NewJobForm />
          </div>
        </div>
      </div>
    )
  }
}

export default NewJobModal
