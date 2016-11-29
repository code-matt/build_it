import {notify} from 'react-notify-toast'
import { newFetch } from '../../lib/fetch'

export const destroyContractSuccessAction = () => ({
  type: 'CONTRACT_DESTROY_SUCCESS'
})

export const destroyContractFailAction = () => ({
  type: 'CONTRACT_DESTROY_FAIL'
})

export default function destroyContract (jobId) {
  return function (dispatch) {
    return newFetch('GET', true, '/api/v1/removesignup?jobId=' + jobId)
    .then(response => response.json())
    .then(json => {
      if (json.status === 'success') {
        notify.show('Pending proposal removed!', 'warning', 2000)
        dispatch(destroyContractSuccessAction())
      } else {
        notify.show('Something is wrong:/ Proposal not removed', 'error', 2000)
        dispatch(destroyContractFailAction())
      }
    })
  }
}