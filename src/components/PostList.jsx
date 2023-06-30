import React from 'react'
import PostItem  from "./PostItem";

const PostList = ({posts}) => {
    if (!posts.length) {
        return (<h1 style = {{textAlign:"center"}}>
        Посты не найдены!
      </h1>)
      } else  return (
    <div style = {{alignItems:'center'}}>
        {posts.map((e)=>
            <PostItem props={e} key={e.id}/>
        )}
    </div>
  )
}

export default PostList