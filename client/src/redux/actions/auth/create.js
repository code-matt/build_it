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
    return fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: pass
        }
      })
    })
    .then(response => response.json())
    .then(json => {
      if (json.status === 'success') {
        dispatch(createActionSuccess())
        dispatch(login(email, pass))
      } else {
        dispatch(createActionReturnedErrors(parseErrors(json.errors)))
      }
    }).catch(error => dispatch(createActionCriticalFail()))
  }
}

export default create
