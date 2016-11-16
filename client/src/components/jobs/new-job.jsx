import React, { Component } from 'react'
import _jobService from '../../network/jobs'

class NewJob extends Component {
  componentDidMount () {
    // get details
  }
  render () {
    return (
      <div id="newJobModal" className="modal fade bs-example-modal-lg alerts" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            new jerb
          </div>
        </div>
      </div>
    )
  }
}

export default NewJob
