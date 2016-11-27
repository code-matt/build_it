import setSelectedJob from '../actions/UI'

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

export default selectJob
