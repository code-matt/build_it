import React, { Component } from 'react'
import { Link } from 'react-router'
import NavBar from '../navbar/navbar'
import _jobService from '../../network/jobs'
import SearchBox from './search'
// import {GoogleMap,Marker,InfoWindow} from 'react-google-maps'
import JobsMap from '../map/map'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      jobs: []
    }
  }
  componentDidMount () {

  }
  handleSearch (coords) {
    _jobService.getJobs(coords)
      .then((res) => {
        console.log(res)
        this.setState({
          jobs: res
        })
      })
  }
  render () {
    const jobs = renderJobs(this.state.jobs)
    return (
      <div>
        <SearchBox searchFunc={this.handleSearch.bind(this)} />
        Search to find jobs..
        {jobs}
        <div style={{height: 500 + 'px'}}>
          <JobsMap />
        </div>
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
