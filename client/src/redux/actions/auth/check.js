  import { newFetch } from '../../lib/fetch'
  
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
      newFetch('GET', true, '/api/v1/profilecheck/')
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
