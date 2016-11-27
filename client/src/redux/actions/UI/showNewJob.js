import {changeModal} from '.'

function showNewJob () {
  return function (dispatch) {
    if (localStorage.token) {
      return fetch('http://localhost:3000/api/v1/profilecheck/', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(response => response.json())
      .then(json => {
        if (json.status === 'true') {
          dispatch(changeModal('show', 'show', 'newJobModal'))
        } else {
          dispatch(changeModal('show', 'show', 'profileModal'))
        }
      })
    } else {
      dispatch(changeModal('show', 'show', 'signupModal'))
    }
  }
}

export default showNewJob