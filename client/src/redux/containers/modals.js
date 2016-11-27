import { connect } from 'react-redux'
import { showModal, changeModal, openLoginModalAction, closeLoginModalAction, openProfileModalAction, closeProfileModalAction, openNewJobModalAction, closeNewJobModalAction, showJob, closeJobModalAction } from '../actions/UI'
import { login, create, editProfilePictureAction, editProfile } from '../actions/auth'
import { addJob, signup, destroyContract } from '../actions/jobs'
import Modals from '../../components/modals/modals'

const mapStateToProps = (state, ownProps) => {
  return {
    modalsState: state.modalsState,
    errors: state.errors,
    profile: state.profile,
    contract: state.contract,
    buildItId: state.buildItId,
    selectedJob: state.selectedJob,
    token: state.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _modalsActions: {
      changeModal: (value, fieldId, modal) => {
        dispatch(changeModal(value, fieldId, modal))
      }
    },
    _jobActions: {
      create: (title, address, description, rate) => {
        dispatch(addJob(title, address, description, rate))
      },
      signup: (jobId, proposal) => {
        dispatch(signup(jobId, proposal))
      },
      destroyContract: (jobId) => {
        dispatch(destroyContract(jobId))
      }
    },
    _authActions: {
      login: (email, pass) => {
        dispatch(login(email, pass))
      },
      create: (email, pass) => {
        dispatch(create(email, pass))
      },
      editProfilePic: (url) => {
        dispatch(editProfilePictureAction(url))
      },
      editProfile: (firstName, lastName, location) => {
        dispatch(editProfile(firstName, lastName, location))
      }
    },
    _uiActions: {
      closeNewJob: () => {
        dispatch(closeNewJobModalAction())
      },
      showJob: (id) => {
        dispatch(showJob(id))
      },
      closeJob: () => {
        dispatch(closeJobModalAction())
      },
      changeModal: (value, fieldId, modal) => {
        dispatch(changeModal(value, fieldId, modal))
      }
    }
  }
}

const VisibleModals = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modals)

export default VisibleModals
