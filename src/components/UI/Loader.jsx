import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div className="d-flex m-3 justify-content-center">
      <Spinner className='p-2' animation="border" role="status"/>
      <span className='p-2'>Loading...</span>
    </div>
  )
}

export default Loader