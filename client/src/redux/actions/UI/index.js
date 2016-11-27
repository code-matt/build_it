import showJob from './showJob'
import showNewJob from './showNewJob'

const openJobModalAction = (jobId) => ({
  type: 'OPEN_JOB_MODAL',
  jobId: jobId
})

export const setSelectedJob = (job) => ({
  type: 'SET_SELECTED_JOB',
  selectJob: job
})

const hoverChangeSearchLocationAction = (location) => ({
  type: 'CHANGE_SEARCH_LOC_HOVER',
  searchLoc: {
    lat: location.lat,
    lng: location.lng
  }
})

const changeModal = (value, fieldId, modal) => ({
  type: 'CHANGE_MODAL',
  fieldId: fieldId,
  value: value,
  modal: modal
})

export {
  openJobModalAction,
  changeModal,
  hoverChangeSearchLocationAction,
  showNewJob,
  showJob
}
