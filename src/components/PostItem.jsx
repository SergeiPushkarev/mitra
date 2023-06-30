import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const PostItem = ({props}) => {
  return (
    <Card className="w-auto m-2 p-3" style={{ maxWidth: '900px' }}>
      <Card.Body>
        <Card.Title className='fs-5'>{props.title}</Card.Title>
        <Card.Text className='fs-6'>
          {props.body}
        </Card.Text>
        <Button variant="primary" className="float-end" size="sm">Commentaries</Button>
      </Card.Body>
    </Card>
  )
}

export default PostItem