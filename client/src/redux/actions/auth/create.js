export const createActionSuccess = () => ({
  type: 'CREATE_SUCCESS'
})

export const createActionReturnedErrors = (errors) => ({
  type: 'CREATE_ERRORS',
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
      if (!json.errors) {
        dispatch(createActionSuccess())
      } else {
        dispatch(createActionReturnedErrors(json.errors))
      }
    }).catch(error => dispatch(createActionCriticalFail()))
  }
}

export default create
