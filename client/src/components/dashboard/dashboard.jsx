import React, { Component } from 'react'

// services
import _jobService from '../../network/jobs'
import _authService from '../../network/auth'
import { Router, Route, hashHistory, browserHistory} from 'react-router'

// components
import NavBar from '../navbar/navbar'
import SearchBox from './search'
import JobsMap from '../map/map'

// modals
import NewJobModal from '../modals/newjob'
import LoginModal from '../modals/login-only'
import LoginSignupModal from '../modals/login-signup'
import FinishProfileModal from '../modals/finish-profile-guard'
import JobModal from '../modals/jobdetails'

// toast
import Notifications, {notify} from 'react-notify-toast'

class Dashboard extends Component {

  constructor () {
    super()
    this.state = {
      jobs: [],
      center: {
        lat: 42.3708967,
        lng: -71.236024399
      },
      selectedJob: undefined
    }
    this.getJob = this.getJob.bind(this)
    this.showJobCB = this.showJobCB.bind(this)
  }

  handleSearch (coords) {
    this.setState({
      center: coords
    })
    _jobService.getJobs(coords)
      .then((res) => {
        this.setState({
          jobs: res
        })
      })
  }

  markerClickedCB (marker) {
    console.log(marker)
  }

  showJobCB (jobInfoElement) {
    var $ = window.$
    var jobId = jobInfoElement.id
    this.setState({
      selectedJob: this.getJob(Number(jobId))
    })
    $('#jobModal').modal('show')
  }
  navigate (data) {
    var $ = window.$
    switch (data) {
      case 'logout':
        _authService.logout()
        notify.show('Successfully logged out.', 'success', 2000)
        break
      case 'login':
        browserHistory.push('/')
        $('#signupModal').modal('show')
        break
      case 'dashboard':
        browserHistory.push('/dashboard')
        break
    }
  }

  newJobCB () {
    var $ = window.$
    if (_authService.loggedIn()) {
      _authService.check(function (finished) {
        if (finished) {
          $('#newJobModal').modal('show')
        } else {
          $('#profileModal').modal('show')
        }
      })
    } else {
      $('#signupModal').modal('show')
    }
  }

  getJob (jobId) {
    for (let job in this.state.jobs) {
      var j = this.state.jobs[job]
      if (jobId === j.id) {
        return j
      }
    }
    return null
  }

  render () {
    return (
      <div className='row'>
        <div className='col-md-3' style={{height: 100 + 'vh'}}>
          <NavBar navigateFunc={this.navigate.bind(this)} />
          <SearchBox searchFunc={this.handleSearch.bind(this)} />
          {renderJobs(this.state.jobs)}
        </div>
        <div className='col-md-9'>
          <div style={{height: 100 + 'vh'}}>
            <JobsMap
              center={this.state.center}
              jobs={this.state.jobs}
              markerCB={this.markerClickedCB.bind(this)}
              newJobCB={this.newJobCB.bind(this)}
              showJobCB={this.showJobCB.bind(this)} />
          </div>
          <JobModal
            selectedJob={this.state.selectedJob} />
          <NewJobModal />
          <LoginModal />
          <LoginSignupModal />
          <FinishProfileModal />
        </div>
      </div>
    )
  }
}

function renderJobs (jobs) {
  if (jobs.length > 0) {
    return jobs.map((job, index) => (
      <Job key={index} job={job} />
        ))
  }
  else return []
}

const Job = ({job}) => {
  return (
    <div>
      <job key={job.id}>
        <p>{job.title}</p>
        <p>{job.description}</p>
      </job>
    </div>
    )
}

export default Dashboard
