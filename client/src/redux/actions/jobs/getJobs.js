export const setJobsAction = (jobs) => ({
  type: 'SET_JOBS',
  jobs: jobs
})

export default function getJobs (coords) {
  return function (dispatch) {
    return fetch('http://localhost:3000/api/v1/jobs?lat=' + coords.lat + '&lng=' + coords.lng, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json =>
      dispatch(setJobsAction(json))
    )
  }
}
