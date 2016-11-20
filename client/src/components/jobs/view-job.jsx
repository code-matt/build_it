import React, { Component } from 'react'
import _jobService from '../../network/jobs'
import Notifications, {notify} from 'react-notify-toast'

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
    var $ = window.$
    event.preventDefault()
    console.log('signup clicked')
    _jobService.signup(
      this.state.selectedJob.id
    ).then((res) => {
      if (res.status === 'success') {
        $('#jobModal').modal('hide')
        notify.show('signup successful', 'success', 2000)
      } else {
        notify.show('Error with signup :( ut oh)', 'error', 2000)
      }
    })
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
