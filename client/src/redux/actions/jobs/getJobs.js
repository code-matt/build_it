import { newFetch } from '../../lib/fetch'

export const setJobsAction = (jobs) => ({
  type: 'SET_JOBS',
  jobs: jobs
})

export default function getJobs (coords, distance) {
  return function (dispatch) {
    return newFetch('GET', false, '/api/v1/jobs?lat=' + coords.lat + '&lng=' + coords.lng + '&distance=' + distance)
    .then(response => response.json())
    .then(json =>
      dispatch(setJobsAction(json))
    )
  }
}
