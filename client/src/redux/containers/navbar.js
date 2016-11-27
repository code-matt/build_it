import { connect } from 'react-redux'
import { openLoginModalAction, closeLoginModalAction, openProfileModalAction, closeProfileModalAction, changeModal } from '../actions/UI'
import { login, logout, getProfile } from '../actions/auth'
import Navbar from '../../components/navbar/navbar'

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _uiActions: {
      changeModal: (value, fieldId, modal) => {
        dispatch(changeModal(value, fieldId, modal))
      }
    },
    _authActions: {
      login: (email, pass) => {
        dispatch(login(email, pass))
      },
      logout: () => {
        dispatch(logout())
      },
      getProfile: () => {
        dispatch(getProfile())
      }
    }
  }
}

const VisibleNavbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default VisibleNavbar
