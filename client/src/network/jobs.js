module.exports = {
  getJobs () {
    return fetch('http://localhost:3000/api/v1/jobs', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
  },
  getJob (id) {
    fetch('http://localhost:3000/api/v1/jobs/' + id, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
  }
}
