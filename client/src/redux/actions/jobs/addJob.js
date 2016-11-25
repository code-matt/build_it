export const createJobSuccessAction = () => ({
  type: 'ADD_JOB_SUCCESS'
})

export const createJobReturnedErrorsAction = (errors) => ({
  type: 'ADD_JOB_RETURNED_ERRORS',
  errors: errors
})

export default function addJob (title, description, address, rate) {
  return function (dispatch) {
    return fetch('http://localhost:3000/api/v1/jobs/', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        job: {
          title: title,
          description: description,
          address: address,
          hourly_rate: rate
        }
      })
    })
    .then(response => response.json())
    .then(json => {
      if (json.status === 'success') {
        dispatch(createJobSuccessAction())
      } else {
        dispatch(createJobReturnedErrorsAction(json.errors))
      }
    })
  }
}

