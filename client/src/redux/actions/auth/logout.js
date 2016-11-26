import Notifications, {notify} from 'react-notify-toast'

export const logoutActionSuccess = () => ({
  type: 'LOGOUT_SUCCESS'
})

function logout () {
  return function (dispatch) {
    notify.show("Logged Out.", "success", 2000)
    dispatch(logoutActionSuccess())
  }
}

export default logout