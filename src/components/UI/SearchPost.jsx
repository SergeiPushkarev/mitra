import React from 'react'
import { Form } from 'react-bootstrap'

const SearchPost = () => {
  return (
    <div>
        <Form.Label>Search</Form.Label>
        <Form.Control
            className="form-control"
            type="search"
            id="example-search-input"
        />
    </div>
  )
}

export default SearchPost