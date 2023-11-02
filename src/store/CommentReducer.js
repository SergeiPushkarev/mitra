const defState = {
    comments:[],
    commError:[],
    isLoad:false,
}

export const GET_COMM = 'GET_COMM';
export const DEL_COMM = 'DEL_COMM';
export const SET_COMM = 'SET_COMM';
export const LOAD_START = 'LOAD_START'
export const LOAD_END = 'LOAD_END'
export const SET_COMMERR = "SET_COMMERR"

export const CommReducer = (state=defState, action) =>{
    switch (action.type) {
        case 'SET_COMM':
            return {...state, comments:[...state.comments,...action.comm]}
        case "DEL_COMM":
            return {...state, comments: [...state.comments.filter(e=>e.postId!==action.id)]}
        case 'LOAD_START':
            return {...state, isLoad: action.id}
        case 'LOAD_END':
            return {...state, isLoad: false}
        case "SET_COMMERR":
            return {...state, commError:[action.err]}
        default:
            return state;
    }
}

export const getComm = (id) => ({type:GET_COMM, id});
export const setComm = (comm) => ({type:SET_COMM, comm});
export const loadStart = (id) => ({type:LOAD_START, id})
export const loadEnd = () => ({type:LOAD_END})
export const delComm = (id) => ({type:DEL_COMM, id});
export const setComErr = (err) => ({type:SET_COMMERR, err});