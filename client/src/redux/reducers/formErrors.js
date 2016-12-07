const errors = (state, action) => {
  if (!state) {
    state = {
      signup: {},
      profile: {},
      addJob: {},
      contract: {}
    }
  }
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        signup: {}
      }
    case 'LOGIN_FAIL':
      return {
        ...state,
        signup: action.error
      }
    case 'JOB_SIGNUP_FAIL':
      return {
        ...state,
        contract: action.errors
      }
    case 'JOB_SIGNUP_SUCCESS':
      return {
        ...state,
        contract: {}
      }
    case 'CREATE_USER_SUCCESS':
      return {
        ...state,
        signup: {}
      }
    case 'CREATE_USER_FORM_ERRORS':
      return {
        ...state,
        signup: action.errors
      }
    case 'ADD_JOB_SUCCESS':
      return {
        ...state,
        addJob: {}
      }
    case 'ADD_JOB_RETURNED_ERRORS':
      return {
        ...state,
        addJob: action.errors
      }
    case 'EDIT_PROFILE_ERRORS':
      return {
        ...state,
        profile: action.errors
      }
    case 'EDIT_PROFILE_SUCCESS':
      return {
        ...state,
        profile: {}
      }
    default:
      return state
  }
}
export { 
  errors
}