import React, { Component } from 'react'

// components
import JobsMap from '../map/map'

// css
import './dashboard.css'

// containers
import VisibleSearch from '../../redux/containers/search'
import VisibleModals from '../../redux/containers/modals'
import VisibleNavbar from '../../redux/containers/navbar'

class Dashboard extends Component {

  constructor () {
    super()
    this.handleNewJob = this.handleNewJob.bind(this)
    this.handleShowJob = this.handleShowJob.bind(this)
    this.componentWillMount = this.componentWillMount.bind(this)
  }

  handleNewJob () {
    this.props._uiActions.showNewJob()
  }

  componentWillMount () {
    this.props._uiActions.changeLocation({
      lat: 42.3600825,
      lng: -71.0588801
    })
    this.props._jobActions.getJobs({
      lat: 42.3600825,
      lng: -71.0588801
    })
  }

  handleShowJob (jobId) {
    this.props._uiActions.showJob(
      jobId,
      this.props.jobs
    )
  }

  render () {
    return (
      <div>
        <VisibleModals />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3 leftjob' style={{height: 100 + 'vh'}}>
              <VisibleNavbar />
              <VisibleSearch />
              {this.props.jobs.length > 0
                ? <div>{renderJobs(this.props.jobs, this)}</div>
                : <div className='text-md-center noresults'>No jobs found<br />Search above to try again..</div>}
            </div>
            <div className='col-md-9'>
              <div style={{height: 100 + 'vh'}}>
                <JobsMap
                  ref='map'
                  center={this.props.searchLoc}
                  jobs={this.props.jobs}
                  newJobCB={this.handleNewJob}
                  showJobCB={this.handleShowJob} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function renderJobs (jobs, component) {
  if (jobs.length > 0) {
    return jobs.map((job, index) => (
      <Job key={index} job={job} jobs={jobs} parent={component} />
        ))
  }
  else return []
}

const Job = ({job, parent, jobs}) => {
  return (
    <div id={job.id} className='card text-md-center jobresult'
      onMouseOver={() => parent.props._uiActions.changeLocation({
        lat: job.lat,
        lng: job.lng
      })}>
      <div className='card-block'>
        <blockquote className='card-blockquote'>
          <p>{job.description}</p>
          <footer >
            {job.address}
            <br />
            <br /><button onClick={() => parent.props._uiActions.showJob(job.id, jobs)} className='btn btn-primary'>{job.hourly_rate / 100 + '$/hr '}Details</button>
          </footer>
        </blockquote>
      </div>
    </div>
  )
}

export default Dashboard
