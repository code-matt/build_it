import {notify} from 'react-notify-toast'

export const jobSignupSuccessAction = () => ({
  type: 'JOB_SIGNUP_SUCCESS'
})

export const jobSignupFailAction = () => ({
  type: 'JOB_SIGNUP_FAIL'
})

export default function signup (jobId, proposal) {
  return function (dispatch) {
    return fetch('http://localhost:3000/api/v1/signup', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        jobId: jobId,
        contract: {proposal: proposal}
      })
    })
    .then(response => response.json())
    .then(json => {
      if (json.status === 'success') {
        notify.show('Proposal sent! Good luck.', 'success', 2000)
        dispatch(jobSignupSuccessAction())
      } else {
        notify.show('Proposal not sent.. something is wrong:/', 'success', 2000)
        dispatch(jobSignupFailAction())
      }
    })
  }
}
