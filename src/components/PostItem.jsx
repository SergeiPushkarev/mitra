import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import userLogo from '../img/icons8-User.png'
import Commentaries from "../components/Commentaries";

const PostItem = ({props}) => {
   return (
    <Card className="w-auto my-2">
      <Card.Body>
        <Row>
          <Col xs={4} md={2}>
            <Link to={'/user/'+ props.userId}>
              <Image src={userLogo} roundedCircle thumbnail className='border-3'/>
            </Link>
          </Col>
          <Col className='d-flex align-items-center' >
            <Card.Title className='fs-5'>{props.title}</Card.Title>
          </Col>
        </Row>
        <Row>
          <Card.Text className='fs-6 p-3'>
            {props.body}
          </Card.Text>
        </Row>
        <Commentaries id={props.id}></Commentaries>
      </Card.Body>
    </Card>
  )
}

export default PostItem