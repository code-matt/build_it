import changeModal from './index'
import openJobModalAction from './index'
import contractFoundAction from '../jobs/checkSignup'
import contractNotFoundAction from '../jobs/checkSignup'
import selectJob from '../../lib/selectJob'

function showJob (jobId, jobs) {
  return function (dispatch) {
    dispatch(selectJob(jobId, jobs))
    if (localStorage.token) {
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
          dispatch(openJobModalAction(jobId))
        } else {
          dispatch(contractNotFoundAction())
          dispatch(openJobModalAction(jobId))
        }
      })
    } else {
      dispatch(contractNotFoundAction())
      dispatch(openJobModalAction(jobId))
    }
  }
}

export default showJob
