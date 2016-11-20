import React, { Component } from 'react'
import _jobService from '../../network/jobs'
import Notifications, {notify} from 'react-notify-toast'

class NewJobForm extends Component {

  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    var $ = window.$
    event.preventDefault()
    console.log('job submitted')
    _jobService.new(
      this.refs.title.value,
      this.refs.description.value,
      this.refs.address.value,
      this.refs.rate.value
    ).then((res) => {
      if (res.status === 'success') {
        $('#newJobModal').modal('hide')
        notify.show('Job Added Successfully!', 'success', 2000)
      } else {
        notify.show('Errors adding job :(', 'error', 2000)
      }
    })
  }

  render () {
    return (
      <div className='text-center job'>
        <form onSubmit={this.handleSubmit}>
          <h4>Add New Job</h4>
          <hr />
          <label><input ref='title' placeholder='title' defaultValue='Job Title' /></label><br />
          <label><input ref='address' placeholder='address' defaultValue='Job Address' /></label><br />
          <label><input ref='description' placeholder='description' defaultValue='Description' /></label><br />
          <label><input ref='rate' placeholder='rate' defaultValue='Hourly Rate' /></label><br />
          <button className='btn btn-primary' type='submit'>Submit Job</button>
        </form>
      </div>
    )
  }
}

export default NewJobForm
