const jobs = (state = [], action) => {
  switch (action.type) {
    case 'SET_JOBS':
      return action.jobs
    default:
      return state
  }
}

const searchLoc = (state = {lat: 0, lng: 0}, action) => {
  switch (action.type) {
    case 'SET_GEOCODED_SEARCH':
      return action.searchLoc
    case 'CHANGE_SEARCH_LOC_HOVER':
      return action.searchLoc
    default:
      return state
  }
}

const contract = (state = null, action) => {
  switch (action.type) {
    case 'CONTRACT_FOUND':
      return action.contract
    case 'CONTRACT_NOT_FOUND':
      return null
    default:
      return state
  }
}

const selectedJob = (state = null, action) => {
  switch (action.type) {
    case 'SET_SELECTED_JOB':
      return action.selectedJob
    default:
      return state
  }
}

export {
  jobs,
  searchLoc,
  contract,
  selectedJob
}
