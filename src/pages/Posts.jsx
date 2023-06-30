import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import PostList from '../components/PostList'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAction } from '../store/PostsReducer';

const Posts = () => {
    const posts = useSelector(state => state.posts.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPostsAction())
    }, [dispatch])
  return (
    <Container className="d-flex justify-content-center">
        <PostList posts={posts}/>
    </Container>
  )
}

export default Posts