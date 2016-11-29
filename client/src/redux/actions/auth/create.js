import {notify} from 'react-notify-toast'
import { newFetch } from '../../lib/fetch'
import login from './login'
import parseErrors from '../../lib/parseErrors'

export const createActionSuccess = () => ({
  type: 'CREATE_USER_SUCCESS'
})

export const createActionReturnedErrors = (errors) => ({
  type: 'CREATE_USER_FORM_ERRORS',
  errors: errors
})

export const createActionCriticalFail = () => ({
  type: 'CREATE_CRITICAL_FAIL',
  token: null
})

function create (email, pass) {
  return function (dispatch) {
    return newFetch('POST', false, '/api/v1/users', {
      user: {
        email: email,
        password: pass
      }
    })
    .then(response => response.json())
    .then(json => {
      if (json.status === 'success') {
        notify.show('Welcome! Signup Successful.', 'success', 2000)
        dispatch(createActionSuccess())
        dispatch(login(email, pass))
      } else {
        notify.show('Noooo! Errors with signup.', 'error', 2000)
        dispatch(createActionReturnedErrors(parseErrors(json.errors)))
      }
    }).catch(error => dispatch(createActionCriticalFail()))
  }
}

export default create
