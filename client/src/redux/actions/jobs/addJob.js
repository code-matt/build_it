import Notifications, {notify} from 'react-notify-toast'
import parseErrors from '../../lib/parseErrors'

export const createJobSuccessAction = () => ({
  type: 'ADD_JOB_SUCCESS'
})

export const createJobErrorsAction = (errors) => ({
  type: 'ADD_JOB_RETURNED_ERRORS',
  errors: errors
})

export default function addJob (title, address, description, rate) {
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
      if (json.errors) {
        notify.show("Errors with job submission :(", "error", 2000)
        dispatch(createJobErrorsAction(parseErrors(json.errors)))
      } else {
        notify.show("WooHoo! Job added successfully!", "success", 2000)
        dispatch(createJobSuccessAction())
      }
    })
  }
}

