import React, { useState } from 'react'
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'

const Commentaries = ({id}) => {
    const [comments, setComments] = useState([])
    const [isOpen, setisOpen] = useState(false)
    const spinnerClass = {opacity: 0}
    const open = () =>{
        setisOpen(!isOpen)
    }
    if (isOpen) {
        spinnerClass.opacity = 1
    }
  return (
    <div>
        <Row>
        <Col>
            <Button variant="primary" className="float-end" size="sm" onClick={()=>open()}>
                Commentaries
                <div className='d-inline px-2' style={spinnerClass}>
                <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                />
                </div>
            </Button>
        </Col>
    </Row>
    <Row className='m-2' >
    {comments.map((e)=>
        <Card key={e.id} className="my-2">
            <h6>{e.email}</h6>
            <div>{e.body}</div>
        </Card>
    )
    }
    </Row>
    </div>
  )
}

export default Commentaries