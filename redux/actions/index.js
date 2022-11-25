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

export const increaseQtyState = (id) =>{
    return {
        type: "INCREASEQTY",
        payload: id
    }
}
export const decreaseQtyState = (id) =>{
    return {
        type: "DECREASEQTY",
        payload: id
    }
}

export const deleteProductFromCart = (id) => {
    return {
        type: "DELETEFROMCART",
        payload: id
    }
}

export const setInitialState = (items) => {
    return {
        type: "SETINITIALSTATE",
        payload: items
    }
}

export const getSearchText = (text) => {
    return {
        type: "SEARCHTEXT",
        payload: text
    }
}

export const loginInfo = (loginData) => {
    return {
        type: "LOGININFO",
        payload: loginData
    }
}

export const updateLoginStatus = (login) => {
    return {
        type: "LOGINSTATUS",
        payload: login
    }
}