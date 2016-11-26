import React, { Component } from 'react'

class JobModal extends Component {
  constructor () {
    super()
    this.handleToggle = this.handleToggle.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.checkIfOwnJob = this.checkIfOwnJob.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleValueChange (event) {
    this.props.valueChangeCB(event.target.value, event.target.id, 'jobModal')
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.submitProposalCB()
  }
  handleToggle (event) {
    event.preventDefault()
    this.props.toggleCB()
  }

  checkIfOwnJob () {
    if (Number(localStorage.buildItId) === this.props.selectedJob.user_id) {
      return (
        <div className='alert alert-warning error text-md-center' role='alert'>
          <strong>You are the owner of this job</strong>
        </div>
      )
    } else {
      return (
        <div className='text-md-center'>
          <button onClick={this.props.submitProposalCB} className='btn btn-primary job-signup-btn' type='button'>Submit Proposal</button>
        </div>
      )
    }
  }

  render () {
    return (
      <div id='jobModal' className='modal fade bs-example-modal-lg alerts' tabIndex='-1' role='dialog' aria-labelledby='myLargeModalLabel' data-backdrop='static' data-keyboard='false'>
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <button onClick={this.handleToggle}>close</button>
            {this.props.contract === null
              ? <div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <div className='card'>
                        <div className='card-header'><h4>{this.props.selectedJob.title}</h4></div>
                        <div className='card-block'>
                          <div className='row'>
                            <div className='col-md-3 profileimg'>
                              <img className='img-circle' src={'https://builditreact.s3.amazonaws.com/uploads/user/avatar/' + this.props.selectedJob.user_id + '/image.png'} />
                            </div>
                            <div className='col-md-9'>
                              <p className='card-text'>{this.props.selectedJob.description}</p>
                            </div>
                          </div>
                          <hr />
                          <ul className='list-group list-group-flush'>
                            <li className='list-group-item'><i className='fa fa-map-marker fa-3x' aria-hidden='true' /><span className='details-li'>{this.props.selectedJob.address}</span></li>
                            <li className='list-group-item'><i className='fa fa-money fa-3x' aria-hidden='true' /><span className='details-li'>{this.props.selectedJob.hourly_rate / 100 + '$/hr'}</span></li>
                          </ul>
                          <div className='text-md-center'>
                            <textarea onChange={this.handleValueChange} id='proposal' rows='9' className='proposal' ref='proposal' placeholder='Enter a proposal for this jobs owner..' />
                          </div>
                          {this.props.token
                          ? this.checkIfOwnJob()
                          : <div className='alert alert-danger error text-md-center' role='alert'>
                            <strong>You need to be logged in to sign up for jobs</strong>
                            <div className='text-md-center' />
                          </div>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              : <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='card'>
                      <div className='card-header'><h4>{this.props.selectedJob.title}</h4></div>
                      <div className='card-block'>
                        <div className='row'>
                          <div className='col-md-3 profileimg'>
                            <img className='img-circle' src={'https://builditreact.s3.amazonaws.com/uploads/user/avatar/' + this.props.selectedJob.user_id + '/image.png'} />
                          </div>
                          <div className='col-md-9'>
                            <p className='card-text'>{this.props.selectedJob.description}</p>
                          </div>
                        </div>
                        <hr />
                        <ul className='list-group list-group-flush'>
                          <li className='list-group-item'><i className='fa fa-map-marker fa-3x' aria-hidden='true' /><span className='details-li'>{this.props.selectedJob.address}</span></li>
                          <li className='list-group-item'><i className='fa fa-money fa-3x' aria-hidden='true' /><span className='details-li'>{this.props.selectedJob.hourly_rate / 100 + '$/hr'}</span></li>
                        </ul>
                        <div className='alert alert-success text-md-center'>
                          Proposal
                          <hr />
                          {this.props.contract.proposal}
                          <hr />
                        </div>
                        {this.props.contract.accepted
                          ? <div className='alert alert-success text-md-center' role='alert'>
                            <strong>Your proposal has been accepted! Check your jobs dashboard</strong>
                          </div>
                          : <div className='alert alert-warning text-md-center' role='alert'>
                            <strong>Pending<br />Your proposal has been sent but is waiting to be accepted or denied by this jobs owner.</strong>
                            <div><button className='btn btn-warning job-signup-btn' type='button' onClick={this.props.removeProposalCB}>Remove my proposal</button></div>
                          </div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </div>
    )
  }
}

JobModal.propTypes = {
  valueChangeCB: React.PropTypes.func,
  toggleCB: React.PropTypes.func,
  submitProposalCB: React.PropTypes.func,
  removeProposalCB: React.PropTypes.func
}

export default JobModal
