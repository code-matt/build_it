import React, { Component } from 'react'

import './navbar.css'

class NavBar extends Component {

  handleClick (action) {
    this.props.navigateFunc(action)
  }

  render () {
    return (
      <div className='text-md-center navbuttons'>
        {this.props.token
        ? <div className='btn btn-primary navbutton' onClick={() => this.props._authActions.logout()}>Logout</div>
        : <div className='btn btn-primary navbutton' onClick={() => this.props._uiActions.changeModal('show', 'show', 'signupModal')}>Login</div>}
        {this.props.token
        ? <div className='btn btn-primary navbutton' onClick={() => this.props._uiActions.changeModal('show', 'show', 'profileModal')}>Profile</div>
        : null}
      </div>
    )
  }
}

NavBar.propTypes = {
  navigateFunc: React.PropTypes.func
}

export default NavBar
