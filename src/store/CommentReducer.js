const defState = {
    comments:[],
    commError:null,
    isLoad:false,
}

const SET_COMM = 'SET_COMM';
const LOAD_START = 'LOAD_START'
const LOAD_END = 'LOAD_END'

export const CommReducer = (state=defState, action) =>{
    switch (action.type) {
        case SET_COMM:
            return {...state, comments:[...action.comm]}
        case LOAD_START:
            return {...state, isLoad: action.payload}
        case LOAD_END:
            return {...state, isLoad: false}
        default:
            return state;
    }
}

export const setComm = (comm) => ({type:SET_COMM, comm});
export const loadStart = (id) => ({type:LOAD_START, id})
export const loadEnd = () => ({type:LOAD_END})