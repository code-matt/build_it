import React, { Component } from 'react'
import JobDetails from '../jobs/view-job'
import Contract from '../jobs/view-contract'
import _jobService from '../../network/jobs'
import _authService from '../../network/auth'

class JobModal extends Component {
  constructor () {
    super()
    this.state = {
      selectedJob: undefined,
      contract: undefined
    }
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
  }
  componentWillReceiveProps (props) {
    if (_authService.loggedIn()) {
      var component = this
      this.setState({
        selectedJob: props.selectedJob
      })
      if (props.selectedJob) {
        _jobService.signedupcheck(props.selectedJob.id)
                .then((res) => {
                  if (res.contract) {
                    console.log('contract found')
                    component.setState({
                      contract: res.contract
                    })
                  } else {
                    console.log('contract not found')
                    component.setState({
                      contract: undefined
                    })
                  }
                })
        this.render()
      }
    }
  }
  render () {
    return (
      <div id='jobModal' className='modal fade bs-example-modal-lg alerts' tabIndex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            {this.state.contract
              ? <Contract
                selectedJob={this.state.selectedJob}
                contract={this.state.contract} />
              : <JobDetails
                selectedJob={this.state.selectedJob} />}
          </div>
        </div>
      </div>
    )
  }
}

export default JobModal
