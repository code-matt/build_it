export default function getJob (id) {
  return function (dispatch) {
    fetch('http://localhost:3000/api/v1/jobs/' + id, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    .then(response => response.json())
    .then(json => json.id)
  }
}