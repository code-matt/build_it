import { newFetch } from '../../lib/fetch'

export const contractFoundAction = (contract) => ({
  type: 'CONTRACT_FOUND',
  contract: contract
})

export const contractNotFoundAction = (contract) => ({
  type: 'CONTRACT_NOT_FOUND',
  contract: null
})

export default function checkSignup (jobId) {
  return function (dispatch) {
    return newFetch('GET', true, '/api/v1/signupcheck?jobId=' + jobId)
    .then(response => response.json())
    .then(json => {
      if (json.contract) {
        dispatch(contractFoundAction(JSON.parse(json.contract)))
      } else {
        dispatch(contractNotFoundAction())
      }
    })
  }
}