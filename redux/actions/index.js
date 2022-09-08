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

export const AddToCartSingle = (item) => {
    return {
        type: "ADDTOCARTSINGLE",
        payload: item
    }
}

export const AddToCart = (item) => {
    return {
        type: "ADDTOCART",
        payload: item
    }
}