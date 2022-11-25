const initialState = {};
const authenticationeducer = (state=initialState, action) =>{
    if(action.type === "LOGININFO"){
        const newState = action.payload;
        return state = newState
    }else{
        return state
    }
}

export default authenticationeducer;