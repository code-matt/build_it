export const setBuildItIdAction = (id) => ({
  type: 'SET_ID',
  buildItId: id
})

export default function getId () {
  return function (dispatch) {
    return fetch('http://localhost:3000/api/v1/getid/', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(response => response.json())
    .then(json =>
      dispatch(setBuildItIdAction(json.id))
    )
  }
}
