const initialState = "";
const SearchTextState = (state=initialState, action) => {
    switch (action.type){
        case "SEARCHTEXT" : return state = (action.payload)
        default : return state
    }
}

export default SearchTextState