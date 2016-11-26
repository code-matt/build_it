export const setSelectedJob = (job) => ({
  type: 'SET_SELECTED_JOB',
  selectJob: job
})

export default function selectJob (id, jobs) {
  return function (dispatch) {
    for (let job in jobs) {
      var j = jobs[job]
      if (j.key == id) {
        dispatch(setSelectedJob({}))
      }
    }
  }
}
