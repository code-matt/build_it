import React, { Component } from 'react'
import JobModal from './jobdetails'
import EditProfileModal from './profile'
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
          closeCB={() => this.props._uiActions.changeModal('hide', 'show', 'jobModal')}
          submitProposalCB={this.handleProposal}
          removeProposalCB={this.handleRemoveProposal} />
        <NewJobModal
          errors={this.props.errors}
          modalsState={this.props.modalsState}
          valueChangeCB={this.handleValueChange.bind(this)}
          closeCB={() => this.props._uiActions.changeModal('hide', 'show', 'newJobModal')}
          submitJobCB={
            () => {
              this.props._jobActions.create(
              this.props.modalsState.newJobModal.title,
              this.props.modalsState.newJobModal.address,
              this.props.modalsState.newJobModal.description,
              this.props.modalsState.newJobModal.rate)
            }}
        />

        <LoginSignupModal
          modalsState={this.props.modalsState}
          errors={this.props.errors}
          valueChangeCB={this.handleValueChange.bind(this)}
          loginCB={() => {
            this.props._authActions.login(
            this.props.modalsState.signupModal.loginEmail,
            this.props.modalsState.signupModal.loginPassword
          ) }}
          signupCB={() => {
            this.props._authActions.create(
            this.props.modalsState.signupModal.signupEmail,
            this.props.modalsState.signupModal.signupPassword
          ) }}
          closeCB={() => this.props._uiActions.changeModal('hide', 'show', 'signupModal')} />
        <EditProfileModal
          modalsState={this.props.modalsState}
          errors={this.props.errors}
          profile={this.props.profile}
          valueChangeCB={this.handleValueChange.bind(this)}
          editProfileCB={
            () => {
              this.props._authActions.editProfile(
              this.props.modalsState.profileModal.firstName,
              this.props.modalsState.profileModal.lastName,
              this.props.modalsState.profileModal.location,
              this.props.modalsState.profileModal.picUrl
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
          closeCB={() => this.props._uiActions.changeModal('hide', 'show', 'profileModal')} />
      </div>
    )
  }
}

export default Modals

