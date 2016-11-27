import { connect } from 'react-redux'
import { login, getId, create, editProfile, checkProfileComplete, logout, getProfile } from '../actions/auth'
import { getJobs, geocode, addJob, signup, checkSignup, destroyContract } from '../actions/jobs'
import { hoverChangeSearchLocationAction, showNewJob, showJob } from '../actions/UI'
import Dashboard from '../../components/dashboard/dashboard'

const mapStateToProps = (state, ownProps) => {
  return {
    jobs: state.jobs,
    token: state.token,
    buildItId: state.buildItId,
    errors: state.errors,
    profileComplete: state.profileComplete,
    profile: state.profile,
    searchLoc: state.searchLoc,
    contract: state.contract
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _authActions: {
      login: (email, pass) => {
        dispatch(login(email, pass))
      },
      getId: () => {
        dispatch(getId())
      },
      create: (email, pass) => {
        dispatch(create(email, pass))
      },
      editProfile: (firstName, lastName, loc) => {
        dispatch(editProfile(firstName, lastName, loc))
      },
      checkProfileComplete: () => {
        dispatch(checkProfileComplete())
      },
      logout: () => {
        dispatch(logout())
      },
      getProfile: () => {
        dispatch(getProfile())
      }
    },
    _jobActions: {
      getJobs: (coords) => {
        dispatch(getJobs(coords))
      },
      geocode: (address) => {
        dispatch(geocode(address))
      },
      addJob: (title, description, address, rate) => {
        dispatch(addJob(title, description, address, rate))
      },
      signup: (jobId, proposal) => {
        dispatch(signup(jobId, proposal))
      },
      checkSignup: (jobId) => {
        dispatch(checkSignup(jobId))
      },
      destroyContract: (jobId) => {
        dispatch(destroyContract(jobId))
      }
    },
    _uiActions: {
      changeLocation: (coords) => {
        dispatch(hoverChangeSearchLocationAction(coords))
      },
      showNewJob: () => {
        dispatch(showNewJob())
      },
      showJob: (id, jobs) => {
        dispatch(showJob(id, jobs))
      }
    }
  }
}

const VisibleDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default VisibleDashboard
