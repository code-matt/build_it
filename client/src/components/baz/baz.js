import React, { Component } from 'react'
import { Link } from 'react-router'
import NavBar from '../navbar/navbar'


var Baz = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        Bazbabababazz
      </div>
    )
  }
})

export default Baz