import React, { Component } from 'react'

class Contract extends Component {
  constructor () {
    super()
    this.state = {
      selectedJob: undefined,
      contract: undefined
    }
  }

  componentWillReceiveProps (props) {
    this.setState({
      selectedJob: props.selectedJob,
      contract: props.contract
    })
  }

  render () {
    return (
      <div>
        {this.state.contract ?
          <div>
            <div>
              {this.state.selectedJob.title}
              <br />
              {this.state.selectedJob.description}
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
