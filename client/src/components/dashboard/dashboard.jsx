import React, { Component } from 'react'

// services
import _jobService from '../../network/jobs'
import _authService from '../../network/auth'

// components
import SearchBox from './search'
import JobsMap from '../map/map'

// modals
import NewJob from '../jobs/new-job'
import SignUp from '../signup/signup'

class Dashboard extends Component {

  constructor () {
    super()
    this.state = {
      jobs: [],
      center: {
        lat: 42.3708967,
        lng: -71.236024399
      }
    }
  }

  handleSearch (coords) {
    this.setState({
      center: coords
    })
    _jobService.getJobs(coords)
      .then((res) => {
        console.log(res)
        this.setState({
          jobs: res
        })
      })
  }

  markerClickedCB (marker) {
    console.log(marker)
  }

  newJobCB () {
    var $ = window.$
    console.log(_authService.loggedIn())
    if (_authService.loggedIn()) {
      $('#newJobModal').modal('show')
    } else {
      $('#signupModal').modal('show')
    }
  }

  render () {
    const jobs = renderJobs(this.state.jobs)
    return (
      <div>
        <SearchBox searchFunc={this.handleSearch.bind(this)} />
        Search to find jobs..
        {jobs}
        <div style={{height: 500 + 'px'}}>
          <JobsMap
            center={this.state.center}
            jobs={this.state.jobs}
            markerCB={this.markerClickedCB.bind(this)}
            newJobCB={this.newJobCB.bind(this)} />
        </div>
        <NewJob />
        <SignUp />
      </div>
    )
  }
}

function renderJobs (jobs) {
  if (jobs.length > 0) {
    return jobs.map((job, index) => (
      <Job key={index} job={job} />
  )) } else {
    return []
  }
}

const Job = ({job}) => {
  return (
    <job>
      <p>{job.title}</p>
    </job>
    )
}

export default Dashboard
