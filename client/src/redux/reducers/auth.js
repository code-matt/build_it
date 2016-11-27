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
      delete localStorage.token
      return null
    case 'LOGOUT_SUCCESS':
      delete localStorage.token
      return null
    default:
      return state
  }
}

const buildItId = (state, action) => {
  var localStorage = window.localStorage
  if (!state) {
    state = localStorage.buildItId || null
  }
  switch (action.type) {
    case 'SET_ID':
      localStorage.buildItId = action.buildItId
      return action.buildItId
    case 'LOGIN_FAIL':
      delete localStorage.buildItId
      return null
    case 'LOGOUT_SUCCESS':
      delete localStorage.buildItId
      return null
    default:
      return state
  }
}

const profileComplete = (state, action) => {
  if (!state) {
    state = false
  }
  switch (action.type) {
    case 'SET_PROFILE_COMPLETE':
      return action.profileComplete
    case 'SET_PROFILE_INCOMPLETE':
      return action.profileComplete
    default:
      return state
  }
}

const profile = (state, action) => {
  var localStorage = window.localStorage
  if (!state) {
    if (localStorage.profile) {
      state = JSON.parse(localStorage.profile)
    } else {
      state = {
        picUrl: '',
        firstName: '',
        lastName: '',
        location: ''
      }
    }
  }
  switch (action.type) {
    case 'EDIT_PROFILE_PICTURE':
      return {
        ...state,
        picUrl: action.picUrl
      }
    case 'SET_PROFILE':
      if (action.profile.picUrl !== undefined) {
        return action.profile
      } else {
        return {
          ...action.profile,
          picUrl: state.profile.picUrl
        }
      }
    case 'LOGIN_FAIL':
      delete localStorage.profile
      return {}
    case 'LOGOUT_SUCCESS':
      delete localStorage.profile
      return {}
    default:
      return state
  }
}


export {
  token,
  buildItId,
  profileComplete,
  profile
}
