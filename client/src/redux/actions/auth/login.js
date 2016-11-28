import {notify} from 'react-notify-toast'

import { changeModal } from '../UI'
import { getProfile } from './getProfile'
import getId from './id'

export const loginActionSuccess = (jwt) => ({
  type: 'LOGIN_SUCCESS',
  token: jwt,
})

export const loginActionFail = () => ({
  type: 'LOGIN_FAIL',
  token: null,
  error: [{
    div: 'non-specific',
    message: 'Username and or password do not match'
  }]
})

function login (email, pass) {
  return function (dispatch) {
    return fetch('http://localhost:3000/api/v1/knock/auth_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        auth: {
          email: email,
          password: pass
        }
      })
    })
    .then(response => response.json())
    .then(json => {
      notify.show('Login Successful!', 'success', 2000)
      dispatch(loginActionSuccess(json.jwt))
      dispatch(getId())
      dispatch(getProfile())
      dispatch(changeModal('hide', 'show', 'signupModal'))
    }).catch(error => {
      notify.show('Login Failure :(', 'error', 2000)
      dispatch(loginActionFail())
    })
  }
}

export default login
