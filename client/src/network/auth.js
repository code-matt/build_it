module.exports = {
  login (email, pass, cb) {
    var _this = this
    return fetch('http://localhost:3000/api/v1/knock/auth_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        auth: {
          email: email,
          password: pass
        }
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.jwt) {
          localStorage.token = responseJson.jwt
          _this.id()
            .then((res) => {
              localStorage.buildItId = res.response.id
            })
          return ({
            authenticated: true,
            token: responseJson.jwt
          })
        } else {
          return ({
            authenticated: false,
            errors: [{
              div: 'non-specific',
              message: 'Username and or password do not match'
            }]
          })
        }
      }).catch((error) => {
        return ({
          authenticated: false,
          errors: [{
            div: 'non-specific',
            message: 'Username and or password do not match'
          }]
        })
      })
  },
  create (email, pass) {
    return fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: pass
        }
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === 'success') {
          return ({
            signupSuccess: true
          }, responseJson)
        } else {
          return ({ signupSuccess: false }, responseJson)
        }
      }).catch((error) => {
        return ({ signupSuccess: false }, error)
      })
  },
  finish (firstName, lastName, location) {
    return fetch('http://localhost:3000/api/v1/edit_user', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: {
          firstName: firstName,
          lastName: lastName,
          loc: location
        }
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === 'success') {
          return ({
            profileComplete: true
          })
        } else {
          return ({
            profileComplete: false,
            errors: JSON.parse(responseJson.errors)
          })
        }
      }).catch((error) => {
        return ({
          authenticated: false
        })
      })
  },
  check () {
    return fetch('http://localhost:3000/api/v1/profilecheck/', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        return ({
          response: responseJson
        })
      })
  },
  id (cb) {
    return fetch('http://localhost:3000/api/v1/getid/', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        return ({
          response: responseJson
        })
      })
  },
  profile (cb) {
    return fetch('http://localhost:3000/api/v1/profile/', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        return ({
          response: responseJson
        })
      })
  },
  getToken () {
    return localStorage.token
  },
  logout (cb) {
    delete localStorage.token
    delete localStorage.buildItId
    if (cb) cb()
    this.onChange(false)
  },
  loggedIn () {
    return !!localStorage.token
  },
  loggedInId () {
    return localStorage.buildItId
  },
  onChange () {}
}
