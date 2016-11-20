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
        this.props.searchFunc(coords)
      })
  }

  render () {
    return (
      <div className='text-center'>
        <hr />
        <h4>Search</h4>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Valid Address' />
          <input className='btn btn-primary searchbtn' type='submit' value='Submit' />
        </form>
        <hr />
      </div>
    )
  }
}

SearchBox.propTypes = {
  searchFunc: React.PropTypes.func,
}


export default SearchBox
