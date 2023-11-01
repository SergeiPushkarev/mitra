import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getComm } from '../store/CommentReducer'
import CommentariesList from './CommentariesList'
import { ButtonCom } from './UI/ButtonCom'

const Commentaries = ({id}) => {
    const [comments, setComments] = useState([])
    const [isOpen, setisOpen] = useState(false)
    const dispatch = useDispatch()
    const open = () =>{
        dispatch(getComm(id))
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
        <CommentariesList id={id}/>
    </Row>
    </div>
  )
}

export default Commentaries