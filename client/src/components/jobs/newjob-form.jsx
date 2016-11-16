import React, { Component } from 'react'
import _jobService from '../../network/jobs'

class NewJobForm extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount () {
    // get details
  }
  handleSubmit (event) {
    event.preventDefault()
    console.log('job submitted')
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label><input ref='title' placeholder='email' defaultValue='Job Title' /></label>
          <label><input ref='address' placeholder='password' defaultValue='Job Address' /></label><br />
          <button type='submit'>Submit Job</button>
        </form>
      </div>
    )
  }
}

export default NewJobForm
