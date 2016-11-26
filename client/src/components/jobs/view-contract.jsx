import React, { Component } from 'react'

class Contract extends Component {
  render () {
    return (
      <div>
        {this.props.contract
        ? <div className='container'>
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
                      <div><button className='btn btn-warning job-signup-btn' onClick={() => this.handleRemove(this.props.selectedJob.id)}>Remove my proposal</button></div>
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      </div>
    )
  }
}
export default Contract
