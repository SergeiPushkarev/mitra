import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ButtonBack = () => {
  return (
    <Link to="/">
        <Button variant='outline-primary' className='my-2'>
            На главную
        </Button>
    </Link>
  )
}
