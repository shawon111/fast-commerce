const initialResult = [];
const getSearchResult = (state=initialResult, action) => {
    switch(action.type){
        case "ADDTOSEARCHRESULT" : return state=(action.payload);
        break;
        case "EMPTYSEARCHRESULT" : return state=(initialResult);
        break;
        default: return state;
    }
}

export default getSearchResult;