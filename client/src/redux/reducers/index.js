import { combineReducers } from 'redux'
import jobs from './jobs'
import token from './auth'

const buildItApp = combineReducers({
  token,
  jobs
})

export default buildItApp
