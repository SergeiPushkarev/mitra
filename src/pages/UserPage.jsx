import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PostList from '../components/PostList'

import { getUserAction} from '../store/UserReducer'
import Loader from '../components/UI/Loader'
import UserItem from '../components/UserItem'
import { ButtonBack } from '../components/UI/ButtonBack'

const UserPage = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(() => {
        dispatch(getUserAction(id))
    }, [id,dispatch])
    const user = useSelector(state=> state.user.user)
    const userPosts = useSelector(state=> state.user.userPosts)
    const isLoading = useSelector(state=> state.isLoading.isLoading)
    const errorUser = useSelector(state=>state.user.userError)
    const errorPost = useSelector(state=>state.user.userPostsError)
 return (
    <div>
        <ButtonBack/>
        <UserItem user={user} error={errorUser}/>
        <div className='py-2'>
            {isLoading
            ? <Loader/>
            : <PostList posts={userPosts} error={errorPost}/>}
        </div>
    </div>
  )
}

export default UserPage