import {notify} from 'react-notify-toast'
import { newFetch } from '../../lib/fetch'
import { changeModal } from '../UI'
import { getProfile } from './getProfile'

import {process} from 'dotenv'

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
    return newFetch('POST', false, '/api/v1/knock/auth_token', {
      auth: {
        email: email,
        password: pass
      }
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
