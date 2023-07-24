import React, { useMemo, useState} from 'react'
import { Container, Pagination } from 'react-bootstrap'
import PostList from '../components/PostList'
import { useSelector } from 'react-redux';
import Loader from '../components/UI/Loader'
import SearchPost from '../components/UI/SearchPost';
import PaginationBar from '../components/UI/PaginationBar';


const Posts = () => {
    const posts = useSelector(state => state.posts.posts)
    const isLoading = useSelector(state => state.posts.isLoading)
    const totalPages = useSelector(state => state.posts.totalPages)
    const activePage = useSelector(state => state.posts.page)


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
        : <div>
            <PostList posts={visiblePosts}/>
            <PaginationBar totalPages={totalPages} activePage={activePage}></PaginationBar>
        </div>
        }
        
    </Container>
  )
}

export default Posts