const modalsState = (state, action) => {
  if (!state) {
    state = {
      signupModal: {
        show: 'hide',
        loginEmail: '',
        loginPassword: '',
        signupEmail: '',
        signupPassword: '',
        loading: false
      },
      profileModal: {
        show: 'hide',
        picUrl: '',
        firstName: '',
        lastName: '',
        location: '',
        loading: false
      },
      newJobModal: {
        show: 'hide',
        title: '',
        address: '',
        description: '',
        rate: '',
        loading: false
      },
      jobModal: {
        proposal: '',
        show: 'hide',
        loading: false
      },
      search: {
        distance: 5
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
    case 'EDIT_PROFILE_PICTURE':
      return {
        ...state,
        profileModal: {
          ...state.profileModal,
          picUrl: action.picUrl
        }
      }
    case 'JOB_SIGNUP_SUCCESS':
      return {
        ...state,
        jobModal: {
          ...state.jobModal,
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