import React, { Component } from 'react'
import { Slider } from 'react-mdl'

class Search extends Component {

  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSliderChange = this.handleSliderChange.bind(this)
  }

  handleSubmit (event) {
    debugger
    event.preventDefault()
    this.props._jobActions.geocodeSearch(
      event.target[0].value,
      Number(event.target[1].value))
  }

  handleSliderChange (event) {
    this.props._UIActions.changeSearch(
      event.target.value,
      'distance',
      'search'
    )
  }

  render () {
    return (
      <div className='text-md-center'>
        <hr />
        <h4>Search</h4>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Valid Address' defaultValue='77 Summer st, Boston MA' className='search-adress-input' ref='input' />
          <br />
          <Slider min={1} max={10} defaultValue={5} onChange={this.handleSliderChange} />{this.refs.slider}
          within: {this.props.searchState.search.distance} miles
          <br />
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
