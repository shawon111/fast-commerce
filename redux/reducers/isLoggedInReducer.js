const initialState = false;
const isloggedIn = (state=initialState, action)=> {
    if(action.type === "LOGINSTATUS"){
        const newState = action.payload;
        return state = newState
    }else{
        return state
    }
}

export default isloggedIn;