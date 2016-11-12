import React, { Component } from 'react'
import { Link } from 'react-router'
import NavBar from '../navbar/navbar'
import _jobService from '../../network/jobs'

var Dashboard = React.createClass({
  componentDidMount () {
    _jobService.getJobs()
  },
  render: function () {
    return (
      <div>
        Bazbabababazz
      </div>
    )
  }
})

export default Dashboard
