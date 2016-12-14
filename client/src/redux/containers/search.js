import React from 'react'
import { connect } from 'react-redux'
import { geocodeSearch } from '../actions/jobs'
import { Slider } from 'react-mdl'
import { changeModal } from '../actions/UI'

let VisibleSearch = ({ dispatch }) => {
  let input
  let slider

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
          defaultValue='77 Summer st, Boston MA'
          className='search-adress-input' /><br />
        <Slider
          min={0}
          max={10}
          defaultValue={5}
          onChange={event => {
            dispatch(changeModal(
              event.target.value,
              'distance',
              'search'
            )) }
          } />
        <button type='submit' className='btn btn-primary searchbtn'>Submit</button>
      </form>
      <hr />
    </div>
  )
}

VisibleSearch = connect()(VisibleSearch)

export default VisibleSearch
