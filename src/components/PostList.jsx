import React from 'react'
import PostItem  from "./PostItem";


const PostList = ({posts, error}) => {
    if (!posts.length) {
        return (
        <div style = {{textAlign:"center"}}> 
          <h1>
            Посты не найдены!
          </h1>
          <h6 style = {{color:"red"}}>{error}</h6>
        </div>)
      } else  return (
    <div>
        {posts.map((e)=>
            <PostItem props={e} key={e.id}/>
        )}
    </div>
  )
}

export default PostList