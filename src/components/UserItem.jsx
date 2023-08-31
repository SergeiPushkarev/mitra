import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import userLogo from '../img/icons8-User.png'

const UserItem = ({user}) => {
  return (
    <Container>
        <Row className='border border-secondary rounded-3 p-3'>
            <Col className='d-flex justify-content-center'>
                <Image src={userLogo} roundedCircle thumbnail className='border-3' />
            </Col>
            <Col sm={6}>
                <Row>
                    <Row>
                        <Col xs={4}>Name:</Col>
                        <Col>{user.name}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>Nickname:</Col>
                        <Col>{user.username}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>Email:</Col>
                        <Col>{user.email}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>Phone:</Col>
                        <Col>{user.phone}</Col>
                    </Row>
                </Row>
            </Col>
        </Row>  
    </Container>
  )
}

export default UserItem