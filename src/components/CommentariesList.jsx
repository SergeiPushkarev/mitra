import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function CommentariesList({id}) {
  const stateComments = useSelector(state=> state.comm.comments)
  const comments = stateComments.filter(e=>e.postId===id)
  const errors = useSelector(state=> state.comm.commError)
  const err = errors.find(e=>e.id===id)
  console.log(err);
  return (
    <div>
        {comments 
        && comments.map((e)=>
            <Card key={e.id} className="my-2">
                <h6>{e.email}</h6>
                <div>{e.body}</div>
            </Card>
        )}
        {err &&
        <div style = {{textAlign:"center"}}> 
            <h1>
              Комментарии не найдены!
            </h1>
            <h6 style = {{color:"red"}}>{err.error}</h6>
          </div>
        }
    </div>
  )
}

export default CommentariesList