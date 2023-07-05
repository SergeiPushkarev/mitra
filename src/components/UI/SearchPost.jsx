import React from 'react'
import { Form } from 'react-bootstrap'

const SearchPost = ({search,setSearchQuery}) => {
  return (
    <div>
        <Form.Label>Search</Form.Label>
        <Form.Control
            value={search}
            className="form-control"
            type="search"
            id="example-search-input"
            onChange={event=>setSearchQuery(event.target.value)}
        />
    </div>
  )
}

export default SearchPost