import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PostList from '../components/PostList'

import { getUserAction, getUserPostAction } from '../store/UserReducer'
import Loader from '../components/UI/Loader'
import UserItem from '../components/UserItem'

const UserPage = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(() => {
        dispatch(getUserAction(id))
        dispatch(getUserPostAction(id))
    }, [id,dispatch])
    const user = useSelector(state=> state.user.user)
    const userPosts = useSelector(state=> state.user.userPosts)
    const isLoading = useSelector(state=> state.isLoading.isLoading)
    const error = useSelector(state=>state.user.userPostsError)
 return (
    <div>
        <UserItem user={user}/>
        <div className='py-2'>
            {isLoading
            ? <Loader/>
            : <PostList posts={userPosts} error={error}/>}
        </div>
    </div>
  )
}

export default UserPage