const modalsState = (state, action) => {
  if (!state) {
    state = {
      signupModal: {
        show: 'hide',
        loginEmail: '',
        loginPassword: '',
        signupEmail: '',
        signupPassword: ''
      },
      profileModal: {
        show: 'hide',
        picUrl: '',
        firstName: '',
        lastName: '',
        location: ''
      },
      newJobModal: {
        show: 'hide',
        title: '',
        address: '',
        description: '',
        rate: ''
      },
      jobModal: {
        proposal: '',
        show: 'hide'
      }
    }
  }
  switch (action.type) {

    case 'CHANGE_MODAL':
     return {
        ...state,
        [action.modal]: {
          ...state[action.modal],
          [action.fieldId]: action.value
        }
      }
    case 'OPEN_LOGIN_MODAL':
      return {
        ...state,
        signupModal: {
          ...state.signupModal,
          show: 'show'
        }
      }
    case 'CLOSE_LOGIN_MODAL':
      return {
        ...state,
        signupModal: {
          ...state.signupModal,
          show: 'hide'
        }
      }
    case 'OPEN_PROFILE_MODAL':
      return {
        ...state,
        profileModal: {
          ...state.profileModal,
          show: 'show'
        }
      }
    case 'CLOSE_PROFILE_MODAL':
      return {
        ...state,
        profileModal: {
          ...state.profileModal,
          show: 'hide'
        }
      }
    case 'OPEN_NEWJOB_MODAL':
      return {
        ...state,
        newJobModal: {
          ...state.newJobModal,
          show: 'show'
        }
      }
    case 'CLOSE_NEWJOB_MODAL':
      return {
        ...state,
        newJobModal: {
          ...state.newJobModal,
          show: 'hide'
        }
      }
    case 'ADD_JOB_SUCCESS':
      return {
        ...state,
        newJobModal: {
          ...state.newJobModal,
          show: 'hide'
        }
      }
    case 'OPEN_JOB_MODAL':
      return {
        ...state,
        jobModal: {
          ...state.jobModal,
          show: 'show'
        }
      }
    case 'CLOSE_JOB_MODAL':
      return {
        ...state,
        jobModal: {
          ...state.jobModal,
          show: 'hide'
        }
      }
    case 'EDIT_PROFILE_SUCCESS':
      return {
        ...state,
        profileModal: {
          ...state.profileModal,
          show: 'hide'
        }
      }
    default:
      return state
  }
}

export {
  modalsState
}