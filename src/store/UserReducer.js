const defState = {
    user:{},
    userError:"",
    userPosts:[],
    userPostsError:"",
}

export const UserReducer = (state=defState, action) =>{
    switch (action.type) {
        case 'SET_USER':
            return {...state, user:{...action.user}};
        case 'SET_USERERROR':
            return {...state, userError:action.payload}
        case 'SET_USERPOSTS':
            return {...state, userPosts:[...action.userPosts]}
        case 'SET_USERPOSTSERROR':
            return {...state, userPostsError:action.payload}
        default:
            return state;
    }
}

export const setUserAction =(user) =>({type:"SET_USER", user})
export const getUserAction = (id) => ({type:"GET_USER",id})
export const setUserPostAction = (userPosts) => ({type:"SET_USERPOSTS", userPosts})
export const getUserPostAction = (userId) => ({type:"GET_USERPOSTS", userId})