module.exports = {
  login (email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true, [])
      this.onChange(true)
      return
    }
    signIn(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true, [])
        this.onChange(true)
      } else {
        if (cb) cb(false, res.errors)
        this.onChange(false)
      }
    })
  },
  create (email, pass, cb) {
    cb = arguments[arguments.length - 1]
    createUser(email, pass, (res) => {
      console.log(res)
      if (res.signupSuccess) {
        this.login(email, pass, cb)
      } else {
        cb(false)
      }
    })
  },
  finish (firstName, lastName, location, cb) {
    cb = arguments[arguments.length - 1]
    finishProfile(firstName, lastName, location, cb, (res) => {
      // console.log(res)
    })
  },
  check (cb) {
    cb = arguments[arguments.length - 1]
    checkProfile(res => {
      if (res.response.status === 'true') {
        cb(true)
      } else {
        cb(false)
      }
    })
  },
  getToken () {
    return localStorage.token
  },
  logout (cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },
  loggedIn () {
    return !!localStorage.token
  },

  onChange () {}
}

function createUser (email, pass, cb) {
  fetch('http://localhost:3000/api/v1/users', {
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
      console.log(responseJson)
      if (responseJson.status === 'success') {
        cb({
          signupSuccess: true
        })
      } else {
        cb({ signupSuccess: false })
      }
    }).catch((error) => {
      cb({ signupSuccess: false })
    })
}

function signIn (email, pass, cb) {
  fetch('http://localhost:3000/api/v1/knock/auth_token', {
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
        cb({
          authenticated: true,
          token: responseJson.jwt
        })
      } else {
        cb({
          authenticated: false,
          errors: [{
            div: 'non-specific',
            message: 'Username and or password do not match'
          }]
        })
      }
    }).catch((error) => {
      cb({
        authenticated: false,
        errors: [{
          div: 'non-specific',
          message: 'Username and or password do not match'
        }]
      })
    })
}

function checkProfile (cb) {
  fetch('http://localhost:3000/api/v1/profilecheck/', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }).then((response) => response.json())
    .then((responseJson) => {
      cb({
        response: responseJson
      })
    })
}

function finishProfile (firstName, lastName, location, cb) {
  console.log(firstName)

  fetch('http://localhost:3000/api/v1/edit_user', {
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
        cb({
          profileComplete: true
        })
      } else {
        cb({
          profileComplete: false,
          errors: [{
            div: 'non-specific',
            message: 'Avatar, First and Last name are required.'
          }]
        })
      }
    }).catch((error) => {
      cb({
        authenticated: false,
        errors: [{
          div: 'non-specific',
          message: 'Avatar, First and Last name are required.'
        }]
      })
    })
}
