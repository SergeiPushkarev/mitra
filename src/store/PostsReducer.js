const defState = {
    posts:[]
}

export const PostReducer = (state=defState, action) =>{
    switch (action.type) {
        case "GET_POSTS":
            return {...state, posts:[...action.posts]}
    
        default:
            return state;
    }
}

export const getPostsAction = (posts) =>({type:"GET_POSTS", posts})
export const fetchPostsAction = () =>({type:"FETCH_POSTS"})