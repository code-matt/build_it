import React, { Component } from 'react'
import { Link } from 'react-router'

var NavBar = React.createClass({
  handleClick: function (action) {
    this.props.navigateFunc(action)
  },
  render: function () {
    return (
      <div>
        <div onClick={() => this.handleClick('login')}>Login</div>
        <div onClick={() => this.handleClick('dashboard')}>Dashboard</div>
        <div onClick={() => this.handleClick('logout')}>Logout</div>
      </div>
    )
  }
})

NavBar.propTypes = {
  navigateFunc: React.PropTypes.func,
}

export default NavBar
