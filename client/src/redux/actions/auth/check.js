  export const setProfileCompleteAction = () => ({
    type: 'SET_PROFILE_COMPLETE',
    profileComplete: true
  })

  export const setProfileIncompleteAction = () => ({
    type: 'SET_PROFILE_INCOMPLETE',
    profileComplete: false
  })

  export default function checkProfileComplete () {
    return function (dispatch) {
      return fetch('http://localhost:3000/api/v1/profilecheck/', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(response => response.json())
      .then(json => {
        if (json.status === 'true') {
          dispatch(setProfileCompleteAction())
        } else {
          dispatch(setProfileIncompleteAction())
        }
      })
    }
  }
