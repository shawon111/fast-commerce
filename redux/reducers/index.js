import getSearchResult from "./searchResultReducer";
import { combineReducers } from "redux";
import addItemToCart from "./addToCartReducer";
import SearchTextState from "./searchTextReducer";
import authenticationeducer from "./authenticationReducer";
import isloggedIn from "./isLoggedInReducer";

const rootReducer = combineReducers({
    getSearchResult,
    addItemToCart,
    SearchTextState,
    authenticationeducer,
    isloggedIn
});

export default rootReducer;