export const destroyContractSuccessAction = () => ({
  type: 'CONTRACT_DESTROY_SUCCESS'
})

export const destroyContractFailAction = () => ({
  type: 'CONTRACT_DESTROY_FAIL'
})

export default function destroyContract (jobId) {
  return function (dispatch) {
    return fetch('http://localhost:3000/api/v1/removesignup?jobId=' + jobId, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(response => response.json())
    .then(json => {
      if (json.status === 'success') {
        dispatch(destroyContractSuccessAction())
      } else {
        dispatch(destroyContractFailAction())
      }
    })
  }
}