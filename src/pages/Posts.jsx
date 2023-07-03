import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import PostList from '../components/PostList'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAction } from '../store/PostsReducer';
import Loader from '../components/UI/Loader'
import SearchPost from '../components/UI/SearchPost';


const Posts = () => {
    const posts = useSelector(state => state.posts.posts)
    const isLoading = useSelector(state => state.posts.isLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPostsAction())
    }, [dispatch])
  return (
    <Container className="d-flex flex-column justify-content-center" style={{ maxWidth: '900px' }}>
        <SearchPost/>
        {isLoading
        ? <Loader/>
        : <PostList posts={posts}/>
        } 
    </Container>
  )
}

export default Posts