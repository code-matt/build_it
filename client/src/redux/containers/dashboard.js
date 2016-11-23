import { connect } from 'react-redux'
import { login } from '../actions'
import Dashboard from '../../components/dashboard/dashboard'

const mapStateToProps = (state, ownProps) => {
  return {
    jobs: state.jobs,
    token: state.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (email, pass) => {
      dispatch(login(email, pass))
    }
  }
}

const VisibleDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default VisibleDashboard
