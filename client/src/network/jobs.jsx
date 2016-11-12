module.exports = {
  getJobs () {
    fetch('http://localhost:3000/api/v1/jobs', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
      })
  }
}
