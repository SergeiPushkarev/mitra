import React from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export const ButtonCom = ({click,id}) => {
    const isLoad = useSelector(state=> state.comm.isLoad)
    const spinnerClass = {opacity: 0}
    if (isLoad === id) {
        spinnerClass.opacity = 1
    }
    return (
    <Button variant="primary" size="sm" className='d-inline' onClick={()=>click()}>
        <span className='ps-4 pe-2'>Commentaries</span>
        <Spinner
        style={spinnerClass}
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
        />
    </Button>
  )
}
