const defState = {
    posts:[],
    page:1,
    limit:2,
    totalPages: null,
    isLoading:false,
}

export const PostReducer = (state=defState, action) =>{
    switch (action.type) {
        case "SET_POSTS":
            return {...state, posts:[...action.posts]}
        case "SET PAGE":
            return {...state, page:action.payload}
        case "SET_TOTAL_PAGES":
            return {...state, totalPages:action.payload}
        case 'SHOW_LOADER':
            return {...state, isLoading:true}
        case "HIDE_LOADER":
            return {...state, isLoading:false}
        default:
            return state;
    }
}

export const setPostsAction = (posts) =>({type:"SET_POSTS", posts})
export const setPageAction = (page) =>({type:"SET_PAGE", page})
export const setTotalPagesAction = (totalPages) =>({type:"SET_TOTAL_PAGES", totalPages})
export const showLoader=()=>({type:"SHOW_LOADER"})
export const hideLoader=()=>({type:"HIDE_LOADER"})
export const getPostsAction = () =>({type:"GET_POSTS"})