const token = (state, action) => {
  var localStorage = window.localStorage
  if (!state) {
    state = localStorage.token || null
  }
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.token = action.token
      return action.token
    case 'LOGIN_FAIL':
      localStorage.token = undefined
      return action.token
    default:
      return state
  }
}

export default token
