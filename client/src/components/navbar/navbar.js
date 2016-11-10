import React, { Component } from 'react'
import { Link } from 'react-router'

// class NavBar extends Component {
//   render () {
//     return (

//       <h2>navbar</h2>

//     )
//   }
// }

var NavBar = React.createClass({
  render: function () {
    return (
      <div>
        <Link to="/">Home2</Link>
        <Link to="/baz">Home2</Link>
        <h1>this is a navbar component</h1>
      </div>
    )
    
  }
})

export default NavBar
