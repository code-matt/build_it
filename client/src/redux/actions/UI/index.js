import showJob from './showJob'
import showNewJob from './showNewJob'

const openJobModalAction = (jobId) => ({
  type: 'OPEN_JOB_MODAL',
  jobId: jobId
})

const setSelectedJob = (job) => ({
  type: 'SET_SELECTED_JOB',
  selectedJob: job
})

const hoverChangeSearchLocationAction = (location) => ({
  type: 'CHANGE_SEARCH_LOC_HOVER',
  searchLoc: {
    lat: location.lat,
    lng: location.lng
  }
})

const changeSearch = (value, fieldId, name) => ({
  type: 'CHANGE_SEARCH',
  fieldId: fieldId,
  value: value,
  name: name
})

const changeModal = (value, fieldId, modal) => ({
  type: 'CHANGE_MODAL',
  fieldId: fieldId,
  value: value,
  modal: modal
})

export {
  setSelectedJob,
  openJobModalAction,
  changeModal,
  hoverChangeSearchLocationAction,
  showNewJob,
  showJob,
  changeSearch
}
