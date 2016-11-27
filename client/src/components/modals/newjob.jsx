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
                <div className='card'>
                  <div className='card-header text-md-center'>
                    <div className=''>
                      <div onClick={this.handleToggle} className='closebutton btn-danger' href='#'>
                        <i className='fa fa-window-close-o'>
                        </i>
                      </div>
                    </div>
                    <h2>Add Job</h2>
                  </div>
                  <div className='text-md-center job'>
                    <form onSubmit={e => {
                      e.preventDefault()
                      this.props.submitJobCB()
                    }}>
                      <ul className='list-group list-group-flush login-list'>
                        <div class='input-group'>
                          <span class='input-group-addon' id='basic-addon8'><i className='fa fa-id-badge fa-2x' aria-hidden='true' /></span>
                          <input onChange={this.handleValueChange} id='title' ref='title' placeholder='Title' type='text' class='form-control' aria-describedby='basic-addon8' />
                        </div>
                        <hr />
                        { renderErrors(this.props.errors.addJob, 'title') }
                        <div class='input-group'>
                          <span class='input-group-addon' id='basic-addon9'><i className='fa fa-id-badge fa-2x' aria-hidden='true' /></span>
                          <input onChange={this.handleValueChange} id='address' ref='address' placeholder='Address' type='text' class='form-control' aria-describedby='basic-addon9' />
                        </div>
                        <hr />
                        { renderErrors(this.props.errors.addJob, 'address') }
                        <div class='input-group'>
                          <textarea rows='10' onChange={this.handleValueChange} id='description' ref='description' placeholder='Description' type='text' />
                        </div>
                        { renderErrors(this.props.errors.addJob, 'description') }
                        Hourly Rate<br />
                        <label><input onChange={this.handleValueChange} id='rate' ref='rate' placeholder='0' /></label><br />
                        { renderErrors(this.props.errors.addJob, 'hourly_rate') }
                        <button className='btn btn-primary' type='submit'>Submit Job</button>
                      </ul>
                    </form>
                  </div>
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
