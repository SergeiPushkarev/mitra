import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getComm } from '../store/CommentReducer'
import CommentariesList from './CommentariesList'
import { ButtonCom } from './UI/ButtonCom'

const Commentaries = ({id}) => {
    const [isOpen, setisOpen] = useState(false)
    const dispatch = useDispatch()
    const open = () =>{
        if (!isOpen) {dispatch(getComm(id))}
        setisOpen(!isOpen)
    }
    console.log('comm rend');
  return (
    <div>
        <Row>
        <Col className="d-flex justify-content-end">
            <ButtonCom id={id} click={open}/>
        </Col>
    </Row>
    <Row className='m-2' >
        {isOpen && <CommentariesList id={id}/>}
    </Row>
    </div>
  )
}

export default Commentaries