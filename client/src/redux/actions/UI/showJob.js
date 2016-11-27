import {openJobModalAction, setSelectedJob} from '.'
import {contractFoundAction, contractNotFoundAction} from '../jobs/checkSignup'

function selectJob (id, jobs) {
  return function (dispatch) {
    for (let job in jobs) {
      var j = jobs[job]
      if (j.id === id) {
        localStorage.job = j
        dispatch(setSelectedJob(j))
      }
    }
  }
}

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
