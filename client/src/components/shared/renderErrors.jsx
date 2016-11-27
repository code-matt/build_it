import React from 'react'

function renderErrors (errors, section) {
  if (errors.length > 0) {
    return errors.map((error, index) => (
      error.div === section ? <Error key={index} error={error} /> : null
  )) } else {
    return []
  }
}

const Error = ({error}) => {
  return (
    <div className='alert alert-danger error' role='alert'>
      {error.div === 'non-specific'
      ? <strong>{error.message}</strong>
      : <strong>{error.div} - {error.message}</strong>}
    </div>
    )
}

export default renderErrors