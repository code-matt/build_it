import React, { Component } from 'react'
import JobModal from './jobdetails'
import FinishProfileModal from './finish-profile-guard'
import LoginSignupModal from './login-signup'
import NewJobModal from './newjob'

class Modals extends Component {

  constructor () {
    super()
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleProposal = this.handleProposal.bind(this)
    this.handleRemoveProposal = this.handleRemoveProposal.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.modalsState) {
      var $ = window.$
      var nextModalsState = nextProps.modalsState
      for (let modal in nextModalsState) {
        var m = nextModalsState[modal]
        $('#' + modal).modal(m.show)
      }
    }
  }

  handleProposal (event) {
    event.preventDefault()
    this.props._jobActions.signup(
      this.props.selectedJob.id,
      this.props.modalsState.jobModal.proposal
    )
  }

  handleRemoveProposal (event) {
    event.preventDefault()
    this.props._jobActions.destroyContract(
      this.props.selectedJob.id
    )
  }

  handleValueChange (value, fieldId, modal) {
    this.props._modalsActions.changeModal(value, fieldId, modal)
  }

  render () {
    return (
      <div>
        <JobModal
          errors={this.props.errors}
          modalsState={this.props.modalsState}
          valueChangeCB={this.handleValueChange.bind(this)}
          contract={this.props.contract}
          selectedJob={this.props.selectedJob}
          token={this.props.token}
          toggleCB={
            this.props.modalsState.jobModal.show === 'show'
            ? () => this.props._uiActions.closeJob()
            : () => this.props._uiActions.showJob()
          }
          submitProposalCB={this.handleProposal}
          removeProposalCB={this.handleRemoveProposal} />
        <NewJobModal
          errors={this.props.errors}
          modalsState={this.props.modalsState}
          valueChangeCB={this.handleValueChange.bind(this)}
          toggleCB={
            this.props.modalsState.newJobModal.show === 'show'
            ? () => this.props._uiActions.closeNewJob()
            : () => this.props._uiActions.showNewJob()
          }
          submitJobCB={
            () => {
              this.props._jobActions.create(
              this.props.modalsState.newJobModal.title,
              this.props.modalsState.newJobModal.address,
              this.props.modalsState.newJobModal.description,
              this.props.modalsState.newJobModal.rate)
            }
          } />

        <LoginSignupModal
          modalsState={this.props.modalsState}
          errors={this.props.errors}
          valueChangeCB={this.handleValueChange.bind(this)}
          loginCB={() => this.props._authActions.login(
            this.props.modalsState.signupModal.loginEmail,
            this.props.modalsState.signupModal.loginPassword
          )}
          signupCB={() => this.props._authActions.create(
            this.props.modalsState.signupModal.signupEmail,
            this.props.modalsState.signupModal.signupPassword
          )}
          toggleCB={
            this.props.modalsState.signupModal.show === 'show'
            ? () => this.props._uiActions.closeLogin()
            : () => this.props._uiActions.showLogin()
          } />
        <FinishProfileModal
          modalsState={this.props.modalsState}
          errors={this.props.errors}
          profile={this.props.profile}
          valueChangeCB={this.handleValueChange.bind(this)}
          editProfileCB={() => {
            this.props._authActions.editProfile(
            this.props.modalsState.profileModal.firstName,
            this.props.modalsState.profileModal.lastName,
            this.props.modalsState.profileModal.location
          ) }}
          changeModalCB={
            (value, fieldId, modal) => {
              this.props._modalsActions.changeModal(value, fieldId, modal)
            }
          }
          editPicCB={
            (url) => {
              this.props._authActions.editProfilePic(url)
            }
          }
          toggleCB={
            this.props.modalsState.profileModal.show === 'show'
            ? () => this.props._uiActions.closeProfile()
            : () => this.props._uiActions.showProfile()
          } />
      </div>
    )
  }
}

export default Modals

