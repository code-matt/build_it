import React, { Component } from 'react'
import _google from '../../network/google'

class SearchBox extends Component {
  constructor () {
    super()
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    _google.geocode(this.state.value)
      .then((coords) => {
        console.log(coords)
        this.props.searchFunc(coords)
      })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.value} onChange={this.handleChange} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

SearchBox.propTypes = {
  searchFunc: React.PropTypes.func,
}


export default SearchBox
