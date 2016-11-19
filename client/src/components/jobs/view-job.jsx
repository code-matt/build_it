import React, { Component } from 'react'
import _jobService from '../../network/jobs'

class JobDetails extends Component {
  constructor () {
    super()
    this.state = {
      selectedJob: undefined
    }
  }
  componentWillReceiveProps (props) {
    this.setState({selectedJob: props.selectedJob})
    console.log(props.selectedJob)
  }
  render () {
    return (
      <div>
        {this.state.selectedJob ? this.state.selectedJob.title : null}
      </div>
    )
  }
}

export default JobDetails
