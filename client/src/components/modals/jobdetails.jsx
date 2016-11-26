import React, { Component } from 'react'
import JobDetails from '../jobs/view-job'
import Contract from '../jobs/view-contract'

class JobModal extends Component {
  constructor () {
    super()
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle (event) {
    event.preventDefault()
    this.props.toggleCB()
  }

  render () {
    return (
      <div id='jobModal' className='modal fade bs-example-modal-lg alerts' tabIndex='-1' role='dialog' aria-labelledby='myLargeModalLabel' data-backdrop='static' data-keyboard='false'>
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <button onClick={this.handleToggle}>close</button>
            {this.props.contract
              ? <Contract
                ref='contract'
                selectedJob={this.props.selectedJob}
                contract={this.props.contract} />
              : <JobDetails
                ref='job'
                valueChangeCB={this.props.valueChangeCB}
                selectedJob={this.props.selectedJob}
                buildItId={this.props.buildItId}
                token={this.props.token}
                submitProposalCB={this.props.submitProposalCB} />}
          </div>
        </div>
      </div>
    )
  }
}

JobModal.propTypes = {
  valueChangeCB: React.PropTypes.func,
  toggleCB: React.PropTypes.func,
  submitProposalCB: React.PropTypes.func
}

export default JobModal
