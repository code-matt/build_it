import React, { Component } from 'react'
import _google from '../../network/google'

class SearchBox extends Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  render () {
    return (
      <div className='text-md-center'>
        <hr />
        <h4>Search</h4>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Valid Address' />
          <button className={this.spinnerClassToggle(this.state.loading)} type='submit' value='Submit'><span className='spinner'><i className='icon-spin icon-refresh' /></span>Submit</button>
        </form>
        <hr />
      </div>
    )
  }
}

SearchBox.propTypes = {
  searchFunc: React.PropTypes.func
}

export default SearchBox
