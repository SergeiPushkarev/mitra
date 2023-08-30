import React, { useMemo, useState} from 'react'
import PostList from '../components/PostList'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/UI/Loader'
import SearchPost from '../components/UI/SearchPost';
import PaginationBar from '../components/UI/PaginationBar';
import { changePageAction } from '../store/PostsReducer';


const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const isLoading = useSelector(state => state.isLoading.isLoading)
    const totalPages = useSelector(state => state.posts.totalPages)
    const activePage = useSelector(state => state.posts.page)
    const setActivePage = (page) =>{
        dispatch(changePageAction(page))
    }

    const [searchQuery, setSearchQuery] = useState('')

    const useVisiblePosts = (posts, searchQuery) => {
        const searchedPosts = useMemo(() =>{
            return posts.filter(a=> a.title.toLocaleLowerCase().includes(searchQuery))
        }, [posts, searchQuery])
        return searchedPosts
    }
    const visiblePosts = useVisiblePosts(posts,searchQuery)
    console.log(visiblePosts);
  return (
    <div className="d-flex flex-column justify-content-center">
        <SearchPost searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        {isLoading
        ? <Loader/>
        : <div>
            <PostList posts={visiblePosts}/>
        </div>
        }
        {totalPages>1 && <PaginationBar totalPages={totalPages} activePage={activePage} setActivePage={setActivePage}></PaginationBar>}
    </div>
  )
}

export default Posts