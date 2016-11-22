import React, { Component } from 'react'
import _jobService from '../../network/jobs'
import Notifications, {notify} from 'react-notify-toast'
import CurrencyMaskedInput from 'react-currency-masked-input'

class NewJobForm extends Component {

  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleErrors = this.handleErrors.bind(this)
    this.state = {
      errors: []
    }
  }

  handleSubmit (event) {
    var $ = window.$
    event.preventDefault()
    _jobService.newJob(
      this.refs.title.value,
      this.refs.description.value,
      this.refs.address.value,
      Math.floor(Number(this.refs.rate.value) * 100)
    ).then((res) => {
      if (res.status === 'success') {
        $('#newJobModal').modal('hide')
        notify.show('Job Added Successfully!', 'success', 2000)
        this.setState({errors: []})
        this.resetFields()
      } else {
        notify.show('Errors adding job :(', 'error', 2000)
        this.setState({errors: this.handleErrors(res.errors)})
      }
    })
  }

  handleErrors (errors) {
    var arr = []
    for (let error in errors) {
      var div = error
      var errorArr = errors[error]
      for (let err in errorArr) {
        arr.push({
          div: div,
          message: errorArr[err]
        })
      }
    }
    return arr
  }

  resetFields () {
    this.refs.title.value = ''
    this.refs.address.value = ''
    this.refs.description.value = ''
  }

  render () {
    return (
      <div className='text-md-center job'>
        <form onSubmit={this.handleSubmit}>
          <h4>Add New Job</h4>
          <hr />
          <label><input ref='title' placeholder='Title' /></label><br />
          { renderErrors(this.state.errors, 'title') }
          <label><input ref='address' placeholder='Valid Address' /></label><br />
          { renderErrors(this.state.errors, 'address') }
          <label><textarea rows='8' ref='description' placeholder='Description' /></label><br />
          { renderErrors(this.state.errors, 'description') }
          Hourly Rate<br />
          <label><CurrencyMaskedInput id='rate' ref='rate' placeholder='0' /></label><br />
          { renderErrors(this.state.errors, 'hourly_rate') }
          <button className='btn btn-primary' type='submit'>Submit Job</button>
        </form>
      </div>
    )
  }
}

function renderErrors (errors, section) {
  if (errors.length > 0) {
    return errors.map((error, index) => (
      error.div === section ? <Error key={index} error={error} /> : null
  )) } else {
    return []
  }
}

const Error = ({error}) => {
  return (
    <div className='alert alert-danger error' role='alert'>
      <strong>{error.message}</strong>
    </div>
    )
}

export default NewJobForm
