import React, { Component } from 'react'
import { Link } from 'react-router'

var NavBar = React.createClass({
  render: function () {
    return (
      <div>
        <Link to='/'>Home2</Link>
        <Link to='/dashboard'>Home2</Link>
        <h1>this is a navbar component</h1>
      </div>
    )
  }
})

export default NavBar
