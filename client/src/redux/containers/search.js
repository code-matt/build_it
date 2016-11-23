import React from 'react'
import { connect } from 'react-redux'
import { fetchJobs } from '../actions'

let Search = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(fetchJobs())
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  )
}
Search = connect()(Search)

export default Search
