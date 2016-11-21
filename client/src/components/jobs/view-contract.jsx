import React, { Component } from 'react'

class Contract extends Component {
  constructor () {
    super()
    this.state = {
      selectedJob: undefined,
      contract: undefined
    }
  }

  render () {
    return (
      <div>
        {this.state.contract
          ? <div>
            <div>
              {this.state.selectedJob.title}
              <br />
              {this.state.selectedJob.description}
              <br />
              {this.state.contract.proposal
                ? this.state.contract.proposal
                : null}
              <br />
            </div>
            <div>
              {this.state.contract.accepted
                ? 'accepted'
                : 'not accepted'}
            </div>
          </div>
        : null}
      </div>
    )
  }
}
export default Contract
