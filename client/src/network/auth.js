module.exports = {
  login (email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    signIn(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
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
        cb({ authenticated: false })
      }
    }).catch((error) => {
      cb({ authenticated: false })
    })
}
