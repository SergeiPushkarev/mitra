import React from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const PostItem = ({props}) => {
  return (
    <Card className="w-auto p-3">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.body}
        </Card.Text>
        <Button variant="primary" className="float-end">Commentaries</Button>
      </Card.Body>
    </Card>
  )
}

export default PostItem