import React, { Component } from 'react'
import _google from '../../network/google'

class SearchBox extends Component {
  constructor () {
    super()
    this.state = {
      value: '',
      loading: false}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.spinnerClassToggle = this.spinnerClassToggle.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  spinnerClassToggle (spin) {
    if (spin) {
      return 'btn btn-primary searchbtn has-spinner active'
    } else {
      return 'btn btn-primary searchbtn has-spinner'
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      loading: true
    })
    _google.geocode(this.state.value)
      .then((coords) => {
        if (coords.lat) {
          this.props.searchFunc(coords, true, this)
        } else {
          this.props.searchFunc(coords, false, this)
        }
      }).catch((error) => {
        this.props.searchFunc(error, false, this)
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
