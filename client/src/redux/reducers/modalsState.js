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
    default:
      return state
  }
}

export {
  modalsState
}