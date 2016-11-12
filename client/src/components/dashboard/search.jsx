import React, { Component } from 'react'

class SearchBox extends Component {
  constructor () {
    super()
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
    console.log(this.state.value)
  }

  render () {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={this.handleChange} />
      </div>
    )
  }
}

export default SearchBox
