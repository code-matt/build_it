import React, { Component } from 'react'

// services
import _jobService from '../../network/jobs'
import _authService from '../../network/auth'

// components
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
      <div>
        <SearchBox searchFunc={this.handleSearch.bind(this)} />
        Search to find jobs..
        <div style={{height: 500 + 'px'}}>
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
    )
  }
}

export default Dashboard
