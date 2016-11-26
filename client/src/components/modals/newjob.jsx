import React, { Component } from 'react'
import renderErrors from '../shared/renderErrors'
import CurrencyMaskedInput from 'react-currency-masked-input'

class NewJobModal extends Component {
  constructor () {
    super()
    this.handleToggle = this.handleToggle.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
  }

  handleToggle (event) {
    event.preventDefault()
    this.props.toggleCB()
  }

  handleValueChange (event) {
    this.props.valueChangeCB(event.target.value, event.target.id, 'newJobModal')
  }

  render () {
    return (
      <div id='newJobModal' className='modal fade bs-example-modal-lg alerts' tabIndex='-1' role='dialog' aria-labelledby='myLargeModalLabel' data-backdrop='static' data-keyboard='false'>
        <div className='modal-dialog modal-sm' role='document'>
          <div className='modal-content'>
            <div className='row'>
              <div className='col-md-12'>
                <button onClick={this.handleToggle}>close</button>
                <div className='text-md-center job'>
                  <form onSubmit={e => {
                    e.preventDefault()
                    this.props.submitJobCB()
                  }}>
                    <h4>Add New Job</h4>
                    <hr />
                    <label><input onChange={this.handleValueChange} id='title' ref='title' placeholder='Title' /></label><br />
                    { renderErrors(this.props.errors.addJob, 'title') }
                    <label><input onChange={this.handleValueChange} id='address' ref='address' placeholder='Valid Address' /></label><br />
                    { renderErrors(this.props.errors.addJob, 'address') }
                    <label><textarea onChange={this.handleValueChange} id='description' rows='8' ref='description' placeholder='Description' /></label><br />
                    { renderErrors(this.props.errors.addJob, 'description') }
                    Hourly Rate<br />
                    <label><input onChange={this.handleValueChange} id='rate' ref='rate' placeholder='0' /></label><br />
                    { renderErrors(this.props.errors.addJob, 'hourly_rate') }
                    <button className='btn btn-primary' type='submit'>Submit Job</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

NewJobModal.propTypes = {
  submitJobCB: React.PropTypes.func,
  valueChangeCB: React.PropTypes.func,
  toggleCB: React.PropTypes.func
}

export default NewJobModal
