import {notify} from 'react-notify-toast'
import {changeModal} from '../UI'
import { newFetch } from '../../lib/fetch'

export const jobSignupSuccessAction = () => ({
  type: 'JOB_SIGNUP_SUCCESS'
})

export const jobSignupFailAction = () => ({
  type: 'JOB_SIGNUP_FAIL'
})

export default function signup (jobId, proposal) {
  return function (dispatch) {
    return newFetch('POST', true, '/api/v1/signup', {
      jobId: jobId,
      contract: {proposal: proposal}
    })
    .then(response => response.json())
    .then(json => {
      if (json.status === 'success') {
        notify.show('Proposal sent! Good luck.', 'success', 2000)
        dispatch(jobSignupSuccessAction())
      } else if (json.status === 'profile_incomplete') {
        notify.show('Please finish your profile before submitting proposals', 'success', 3500)
        dispatch(changeModal('show', 'show', 'profileModal'))
      } else {
        notify.show('Proposal not sent.. something is wrong:/', 'success', 2000)
        dispatch(jobSignupFailAction())
      }
    })
  }
}
