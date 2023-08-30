const defState = {
    isLoading: false
}

export const LoaderReducer =(state=defState, action) =>{
    switch (action.type) {
        case 'SHOW_LOADER':
            return {...state, isLoading:true}
        case "HIDE_LOADER":
            return {...state, isLoading:false}
        default:
            return state;
    }
}

export const showLoader=()=>({type:"SHOW_LOADER"})
export const hideLoader=()=>({type:"HIDE_LOADER"})