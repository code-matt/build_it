import React, { Component } from 'react'

class NavBar extends Component{

  handleClick (action) {
    this.props.navigateFunc(action)
  }

  render () {
    return (
      <div>
        <div onClick={() => this.handleClick('logout')}>Logout</div>
        <div onClick={() => this.handleClick('profile')}>Profile</div>
      </div>
    )
  }
}

NavBar.propTypes = {
  navigateFunc: React.PropTypes.func
}

export default NavBar
