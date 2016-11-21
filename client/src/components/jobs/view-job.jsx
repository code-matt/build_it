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
  }
  handleSignUp (event) {
    var $ = window.$
    event.preventDefault()
    _jobService.signup(
      this.state.selectedJob.id
    ).then((res) => {
      if (res.status === 'success') {
        $('#jobModal').modal('hide')
        notify.show('signup successful', 'success', 2000)
      } else {
        notify.show('Error with signup :( ut oh', 'error', 2000)
      }
    })
  }
  render () {
    return (
      <div>
        {!this.state.selectedJob ? null
        : <div className='card'>
          <div className='card-header'>{this.state.selectedJob.title}</div>
          <div className='card-block'>
            <p className='card-text'>{this.state.selectedJob.description}</p>
            <button className='btn btn-primary' onClick={this.handleSignUp.bind(this)}>Sign Up</button>
          </div>
        </div>}
      </div>
    )
  }
}

export default JobDetails
