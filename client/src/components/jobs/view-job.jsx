import React, { Component } from 'react'
import _jobService from '../../network/jobs'
import _authService from '../../network/auth'
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
        notify.show('Error with signup :( ut oh)', 'error', 2000)
      }
    })
  }
  handleLogin () {
    var $ = window.$
    $('#signupModal').modal('show')
  }
  checkIfOwnJob () {
    if (localStorage.buildItId == this.state.selectedJob.user_id) {
      return (
        <div className='alert alert-warning error text-md-center' role='alert'>
          <strong>You are the owner of this job</strong>
        </div>
      )
    } else {
      return (
        <div className='text-md-center'><button className='btn btn-primary job-signup-btn' onClick={this.handleSignUp.bind(this)}>Submit Proposal</button></div>
      )
    }
  }
  render () {
    return (
      <div>
        {!this.state.selectedJob ? null
        : <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-header'><h4>{this.state.selectedJob.title}</h4></div>
                <div className='card-block'>
                  <div className='row'>
                    <div className='col-md-3 profileimg'>
                      <img className='img-circle' src={'https://builditreact.s3.amazonaws.com/uploads/user/avatar/' + this.state.selectedJob.user_id + '/image.png'} />
                    </div>
                    <div className='col-md-9'>
                      <p className='card-text'>{this.state.selectedJob.description}</p>
                    </div>
                  </div>
                  <hr />
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><i className='fa fa-map-marker fa-3x' aria-hidden='true' /><span className='details-li'>{this.state.selectedJob.address}</span></li>
                    <li className='list-group-item'><i className='fa fa-money fa-3x' aria-hidden='true' /><span className='details-li'>{this.state.selectedJob.hourly_rate / 100 + '$/hr'}</span></li>
                  </ul>
                  <div className='text-md-center'>
                    <textarea rows='9' className='proposal' ref='description' placeholder='Enter a proposal for this jobs owner..' />
                  </div>
                  {_authService.loggedIn()
                  ? this.checkIfOwnJob()
                  : <div className='alert alert-danger error text-md-center' role='alert'>
                    <strong>You need to be logged in to sign up for jobs</strong>
                    <div className='text-md-center'>
                      <button className='btn btn-primary job-signup-btn' onClick={() => this.handleLogin()}>Login</button>
                    </div>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>}
      </div>
    )
  }
}

export default JobDetails
