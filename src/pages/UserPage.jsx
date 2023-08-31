import React, { useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PostList from '../components/PostList'
import userLogo from '../img/icons8-User.png'
import { getUserAction, getUserPostAction } from '../store/UserReducer'
import Loader from '../components/UI/Loader'

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
        <Container>
        <Row className='border border-secondary rounded-3 p-3'>
            <Col className='d-flex justify-content-center'>
                <Image src={userLogo} roundedCircle thumbnail className='border-3' />
            </Col>
            <Col sm={6}>
                <Row>
                    <Row>
                        <Col xs={4}>Name:</Col>
                        <Col>{user.name}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>Nickname:</Col>
                        <Col>{user.username}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>Email:</Col>
                        <Col>{user.email}</Col>
                    </Row>
                    <Row>
                        <Col xs={4}>Phone:</Col>
                        <Col>{user.phone}</Col>
                    </Row>
                </Row>
            </Col>
        </Row>  
    </Container>
    <div className='py-2'>
        {isLoading
        ? <Loader/>
        : <PostList posts={userPosts} error={error}/>}
    </div>
    </div>
  )
}

export default UserPage