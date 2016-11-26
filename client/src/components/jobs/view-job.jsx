import React, { Component } from 'react'

class JobDetails extends Component {
  constructor () {
    super()
    this.checkIfOwnJob = this.checkIfOwnJob.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
  }

  handleValueChange (event) {
    this.props.valueChangeCB(event.target.value, event.target.id, 'jobModal')
  }
  
  handleProposal (event) {
    this.props.submitProposalCB()
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
        <div className='text-md-center'><button onClick={this.handleProposal} className='btn btn-primary job-signup-btn' onClick={this.handleSignUp.bind(this)}>Submit Proposal</button></div>
      )
    }
    return null
  }
  
  render () {
    return (
      <div>
        {!this.props.selectedJob ? null
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
                  <div className='text-md-center'>
                    <textarea onChange={this.handleValueChange} id='proposal' rows='9' className='proposal' ref='proposal' placeholder='Enter a proposal for this jobs owner..' />
                  </div>
                  {this.props.token
                  ? this.checkIfOwnJob()
                  : <div className='alert alert-danger error text-md-center' role='alert'>
                    <strong>You need to be logged in to sign up for jobs</strong>
                    <div className='text-md-center'>
                      <button className='btn btn-primary job-signup-btn' onClick={() => this.handleLogin()}>Login</button>
                    </div>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>}
      </div>
    )
  }
}


JobDetails.propTypes = {
  valueChangeCB: React.PropTypes.func,
  submitProposalCB: React.PropTypes.func
}


export default JobDetails
