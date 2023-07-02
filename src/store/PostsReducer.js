const defState = {
    posts:[],
    isLoading:false,
}

export const PostReducer = (state=defState, action) =>{
    switch (action.type) {
        case "GET_POSTS":
            return {...state, posts:[...action.posts]}
        case 'SHOW_LOADER':
            return {...state, isLoading:true}
        case "HIDE_LOADER":
            return {...state, isLoading:false}
        default:
            return state;
    }
}

export const getPostsAction = (posts) =>({type:"GET_POSTS", posts})
export const fetchPostsAction = () =>({type:"FETCH_POSTS"})
export const showLoader=()=>({type:"SHOW_LOADER"})
export const hideLoader=()=>({type:"HIDE_LOADER"})