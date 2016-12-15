import { combineReducers } from 'redux'
import { errors } from './formErrors.js'
import { jobs, searchLoc, contract, selectedJob } from './jobs'
import { token, buildItId, profileComplete, profile } from './auth'
import { modalsState } from './modalsState'
import { searchState } from './searchState'

const buildItApp = combineReducers({
  token,
  buildItId,
  jobs,
  errors,
  profileComplete,
  profile,
  searchLoc,
  contract,
  modalsState,
  selectedJob,
  searchState
})

export default buildItApp
