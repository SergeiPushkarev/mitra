import React, { useEffect, useMemo, useState} from 'react'
import { Container } from 'react-bootstrap'
import PostList from '../components/PostList'
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../store/PostsReducer';
import Loader from '../components/UI/Loader'
import SearchPost from '../components/UI/SearchPost';


const Posts = () => {
    const posts = useSelector(state => state.posts.posts)
    const isLoading = useSelector(state => state.posts.isLoading)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getPostsAction())
    // }, [dispatch])

    const [searchQuery, setSearchQuery] = useState('')

    const useVisiblePosts = (posts, searchQuery) => {
        const searchedPosts = useMemo(() =>{
            return posts.filter(a=> a.title.toLocaleLowerCase().includes(searchQuery))
        }, [posts, searchQuery])
        return searchedPosts
    }
    const visiblePosts = useVisiblePosts(posts,searchQuery)
    console.log(searchQuery);
  return (
    <Container className="d-flex flex-column justify-content-center" style={{ maxWidth: '900px' }}>
        <SearchPost searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        {isLoading
        ? <Loader/>
        : <PostList posts={visiblePosts}/>
        } 
    </Container>
  )
}

export default Posts