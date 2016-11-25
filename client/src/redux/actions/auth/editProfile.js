export const editProfileActionSuccess = () => ({
  type: 'EDIT_PROFILE_SUCCESS',
  profileComplete: true
})

export const editProfileActionHasErrors = (errors) => ({
  type: 'EDIT_PROFILE_ERRORS',
  errors: errors
})

export default function editProfile (firstName, lastName, loc) {
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
      } else {
        dispatch(editProfileActionHasErrors(json.errors))
      }
    })
  }
}
