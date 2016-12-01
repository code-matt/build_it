import React, { Component } from 'react'

import VisibleSearch from '../../redux/containers/search'
import Sidebar from 'react-sidebar'

import './slideMenu.css'

class SlideMenu extends Component {

  sidebarContent () {
    return (
      <div>
        <VisibleSearch />
      </div>
    )
  }

  render () {
    return (
      <div className='text-md-center long-side-menu-button stretchRight'>
        <p>S</p>
        <p>E</p>
        <p>A</p>
        <p>R</p>
        <p>C</p>
        <p>H</p>
      </div>
    )
  }
}

export default SlideMenu
