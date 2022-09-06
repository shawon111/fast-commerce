export const AddToSearchResult = (searchData) =>{
    return {
        type: "ADDTOSEARCHRESULT",
        payload: searchData
    }
}

export const EmptySearchResult = () =>{
    return {
        type: "EMPTYSEARCHRESULT"
    }
}