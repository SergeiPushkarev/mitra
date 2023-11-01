import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { ButtonCom } from './ButtonCom'

const Commentaries = ({id}) => {
    const [comments, setComments] = useState([])
    const [isOpen, setisOpen] = useState(false)
    
    const open = () =>{
        setisOpen(!isOpen)
    }
  return (
    <div>
        <Row>
        <Col className="d-flex justify-content-end">
            <ButtonCom isLoad={isOpen} click={open}/>
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