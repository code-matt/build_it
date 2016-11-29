import { setLocalProfile } from '../../lib/profile'
import {newFetch} from '../../lib/fetch'

const setProfileAction = (profile) => ({
  type: 'SET_PROFILE',
  profile: profile
})

function getProfile () {
  return function (dispatch) {
    return newFetch('GET', true, '/api/v1/profile/')
    .then(response => response.json())
    .then(json => {
      dispatch(setProfileAction({
        firstName: json.firstName,
        lastName: json.lastName,
        location: json.location,
        picUrl: json.picUrl
      }))
      setLocalProfile(json)
    })
  }
}

export {
  getProfile,
  setProfileAction
}