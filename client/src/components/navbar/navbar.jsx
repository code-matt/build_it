import React, { Component } from 'react'
import _authService from '../../network/auth'

class NavBar extends Component {

  handleClick (action) {
    this.props.navigateFunc(action)
  }

  render () {
    return (
      <div className='text-md-center navbuttons'>
        {this.props.loggedIn
        ? <div className='btn btn-primary navbutton' onClick={() => this.handleClick('logout')}>Logout</div>
        : <div className='btn btn-primary navbutton' onClick={() => this.handleClick('login')}>Login</div>}
        {this.props.loggedIn
          ? <div className='btn btn-primary navbutton' onClick={() => this.handleClick('profile')}>Profile</div>
          : null}
      </div>
    )
  }
}

NavBar.propTypes = {
  navigateFunc: React.PropTypes.func
}

export default NavBar
