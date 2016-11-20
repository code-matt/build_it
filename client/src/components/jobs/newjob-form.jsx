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
      <div className='text-md-center job'>
        <form onSubmit={this.handleSubmit}>
          <h4>Add New Job</h4>
          <hr />
          <label><input ref='title' placeholder='Title' /></label><br />
          <label><input ref='address' placeholder='Valid Address' /></label><br />
          <label><textarea rows='8' ref='description' placeholder='Description' /></label><br />
          <label><input ref='rate' placeholder='Hourly Rate' /></label><br />
          <button className='btn btn-primary' type='submit'>Submit Job</button>
        </form>
      </div>
    )
  }
}

export default NewJobForm
