module.exports = {
  geocode (address) {
    var key = "AIzaSyD-6m0bT_U-ShiqoqaqV7VcxZgFl5qtzh4"
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + key, {})
      .then((response) => response.json())
      .then((res) => {
        return {
          lat: res.results[0].geometry.location.lat,
          lng: res.results[0].geometry.location.lng
        }
      })
  }
}
