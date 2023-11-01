import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function CommentariesList({id}) {
  const stateComments = useSelector(state=> state.comm.comments)
  const comments = stateComments.filter(e=>e.postId===id)
  return (
    <div>
        {comments.map((e)=>
        <Card key={e.id} className="my-2">
            <h6>{e.email}</h6>
            <div>{e.body}</div>
        </Card>
    )
    }
    </div>
  )
}

export default CommentariesList