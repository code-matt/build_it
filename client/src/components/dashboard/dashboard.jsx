import React, { Component } from 'react'
import { Link } from 'react-router'
import NavBar from '../navbar/navbar'
import _jobService from '../../network/jobs'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      jobs: []
    }
  }
  componentDidMount () {
    // this.setState({
    //   jobs: _jobService.getJobs()
    // })
    _jobService.getJobs()
      .then((res) => {
        this.setState({
          jobs: res
        })
      })
  }
  render () {
    const jobs = renderJobs(this.state.jobs)
    return (
      <div>
        Bazbabababazz
        {jobs}
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
    <job>
      <p>{job.title}</p>
    </job>
    )
}

export default Dashboard
