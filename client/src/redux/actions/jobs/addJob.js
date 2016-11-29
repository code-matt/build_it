import {notify} from 'react-notify-toast'
import parseErrors from '../../lib/parseErrors'
import { newFetch } from '../../lib/fetch'

export const createJobSuccessAction = () => ({
  type: 'ADD_JOB_SUCCESS'
})

export const createJobErrorsAction = (errors) => ({
  type: 'ADD_JOB_RETURNED_ERRORS',
  errors: errors
})

export default function addJob (title, address, description, rate) {
  return function (dispatch) {
    return newFetch('POST', true, '/api/v1/jobs', {
      job: {
        title: title,
        description: description,
        address: address,
        hourly_rate: rate * 100
      }
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

