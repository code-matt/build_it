const openLoginModalAction = () => ({
  type: 'OPEN_LOGIN_MODAL'
})

const closeLoginModalAction = () => ({
  type: 'CLOSE_LOGIN_MODAL'
})

const openProfileModalAction = () => ({
  type: 'OPEN_PROFILE_MODAL'
})

const closeProfileModalAction = () => ({
  type: 'CLOSE_PROFILE_MODAL'
})

const openNewJobModalAction = () => ({
  type: 'OPEN_NEWJOB_MODAL'
})

const closeNewJobModalAction = () => ({
  type: 'CLOSE_NEWJOB_MODAL'
})

const closeJobModalAction = () => ({
  type: 'CLOSE_JOB_MODAL'
})

const openJobModalAction = (jobId) => ({
  type: 'OPEN_JOB_MODAL',
  jobId: jobId
})

// /////////////////////////////////////////////////////////
const contractFoundAction = (contract) => ({
  type: 'CONTRACT_FOUND',
  contract: contract
})

const contractNotFoundAction = (contract) => ({
  type: 'CONTRACT_NOT_FOUND',
  contract: null
})

const setSelectedJob = (job) => ({
  type: 'SET_SELECTED_JOB',
  selectedJob: job
})

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

function showNewJob () {
  return function (dispatch) {
    if (localStorage.token) {
      return fetch('http://localhost:3000/api/v1/profilecheck/', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(response => response.json())
      .then(json => {
        if (json.status === 'true') {
          dispatch(openNewJobModalAction())
        } else {
          dispatch(closeNewJobModalAction())
        }
      })
    } else {
      dispatch(openLoginModalAction())
    }
  }
}

export {
  openLoginModalAction,
  closeLoginModalAction,
  closeProfileModalAction,
  openProfileModalAction,
  changeModal,
  hoverChangeSearchLocationAction,
  showNewJob,
  closeNewJobModalAction,
  closeJobModalAction,
  showJob
}
