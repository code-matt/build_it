import React from 'react'
import { connect } from 'react-redux'
import { geocodeSearch } from '../actions/jobs'

let VisibleSearch = ({ dispatch }) => {
  let input

  return (
    <div className='text-md-center'>
      <hr />
      <h4>Search</h4>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(geocodeSearch(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} placeholder='Valid Address'
          defaultValue='77 Summer st, Boston MA' />
        <button type='submit' className='btn btn-primary searchbtn'>Submit</button>
      </form>
      <hr />
    </div>
  )
}
VisibleSearch = connect()(VisibleSearch)

export default VisibleSearch
