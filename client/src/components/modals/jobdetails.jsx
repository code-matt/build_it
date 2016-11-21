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
    var component = this
    this.setState({
      selectedJob: props.selectedJob
    })
    if (_authService.loggedIn()) {
      if (props.selectedJob) {
        _jobService.signedupcheck(props.selectedJob.id)
                .then((res) => {
                  if (res.contract) {
                    component.setState({
                      contract: res.contract
                    })
                    component.refs.contract.setState({
                      selectedJob: props.selectedJob,
                      contract: res.contract
                    })
                  } else {
                    component.setState({
                      contract: undefined
                    })
                    component.refs.job.setState({
                      selectedJob: props.selectedJob
                    })
                  }
                })
      }
    } else {
      component.setState({
        contract: undefined
      })
    }
  }
  render () {
    return (
      <div id='jobModal' className='modal fade bs-example-modal-lg alerts' tabIndex='-1' role='dialog' aria-labelledby='myLargeModalLabel'>
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            {this.state.contract
              ? <Contract
                ref='contract'
                selectedJob={this.state.selectedJob}
                contract={this.state.contract} />
              : <JobDetails
                ref='job'
                selectedJob={this.state.selectedJob} />}
          </div>
        </div>
      </div>
    )
  }
}

export default JobModal
