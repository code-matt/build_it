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
    return fetch('http://localhost:3000/api/v1/signupcheck?jobId=' + jobId, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
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