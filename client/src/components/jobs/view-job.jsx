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
  handleSignUp () {
    console.log('signup')
  }
  render () {
    return (
      <div>
        {!this.state.selectedJob ? null
         : <div>
           {this.state.selectedJob.title}
           {this.state.selectedJob.description}
           <button onClick={this.handleSignUp.bind(this)}>Sign Up</button>
         </div>}
      </div>
    )
  }
}

export default JobDetails
