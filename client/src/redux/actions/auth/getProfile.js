import { setLocalProfile } from '../../lib/profile'

const setProfileAction = (profile) => ({
  type: 'SET_PROFILE',
  profile: profile
})

function getProfile () {
  return function (dispatch) {
    return fetch('http://localhost:3000/api/v1/profile/', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
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