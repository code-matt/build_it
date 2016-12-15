import React, { Component } from 'react'
import { Slider } from 'react-mdl'

class Search extends Component {

  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props._jobActions.geocodeSearch(
      event.target[0].value,
      event.target[1].value)
  }

  handleSliderChange (event) {

  }

  render () {
    return (
      <div className='text-md-center'>
        <hr />
        <h4>Search</h4>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Valid Address' defaultValue='77 Summer st, Boston MA' className='search-adress-input' ref='input' />
          <br />
          <Slider min={0} max={10} defaultValue={5} />
          <button type='submit' className='btn btn-primary searchbtn'>Submit</button>
        </form>
        <hr />
      </div>
    )
  }
}

Search.propTypes = {
  navigateFunc: React.PropTypes.func
}

export default Search
