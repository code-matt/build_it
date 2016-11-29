import {changeModal} from '.'
import { newFetch } from '../../lib/fetch'

function showNewJob () {
  return function (dispatch) {
    if (localStorage.token) {
      return newFetch('GET', true, '/api/v1/profilecheck')
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