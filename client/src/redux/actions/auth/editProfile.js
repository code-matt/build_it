import {setProfileAction} from './getProfile'
import setLocalProfile from '../../lib/profile'
import parseErrors from '../../lib/parseErrors'

const editProfilePictureAction = (url) => ({
  type: 'EDIT_PROFILE_PICTURE',
  picUrl: url
})

export const editProfileActionSuccess = () => ({
  type: 'EDIT_PROFILE_SUCCESS'
})

export const editProfileActionHasErrors = (errors) => ({
  type: 'EDIT_PROFILE_ERRORS',
  errors: errors
})

function editProfile (firstName, lastName, location) {
  return function (dispatch) {
    return fetch('http://localhost:3000/api/v1/edit_user', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: {
          firstName: firstName,
          lastName: lastName,
          loc: location
        }
      })
    })
    .then(response => response.json())
    .then(json => {
      if (json.status === 'success') {
        dispatch(editProfileActionSuccess())
        dispatch(setProfileAction(firstName, lastName, location))
        setLocalProfile({
          firstName: json.firstName,
          lastName: json.lastName,
          location: json.location
        })
      } else {
        dispatch(editProfileActionHasErrors(parseErrors(json.errors)))
      }
    })
  }
}

export {
  editProfile,
  editProfilePictureAction
}
