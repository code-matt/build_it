module.exports = {
  getJobs (coords) {
    return fetch('http://localhost:3000/api/v1/jobs?lat=' + coords.lat + '&lng=' + coords.lng, {
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
  },
  new (title, description, address, rate) {
    return fetch('http://localhost:3000/api/v1/jobs/', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        job: {
          title: title,
          description: description,
          address: address,
          hourly_rate: rate
        }
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
  }
}
