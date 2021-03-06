import {notify} from 'react-notify-toast'
import { newFetch } from '../../lib/fetch'
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

function editProfile (firstName, lastName, location, picUrl) {
  return function (dispatch) {
    return newFetch('POST', true, '/api/v1/edit_user', {
      data: {
        firstName: firstName,
        lastName: lastName,
        loc: location
      }
    })
    .then(response => response.json())
    .then(json => {
      if (json.status === 'success') {
        notify.show('Edit Profile Success', 'success', 2000)
        dispatch(editProfileActionSuccess())
        dispatch(setProfileAction(firstName, lastName, location, picUrl))
        setLocalProfile({
          firstName: json.firstName,
          lastName: json.lastName,
          location: json.location,
          picUrl: picUrl
        })
      } else {
        notify.show('Edit Profile Failure :(', 'warning', 2000)
        dispatch(editProfileActionHasErrors(parseErrors(json.errors)))
      }
    })
  }
}

export {
  editProfile,
  editProfilePictureAction
}
