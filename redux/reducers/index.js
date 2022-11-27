import getSearchResult from "./searchResultReducer";
import { combineReducers } from "redux";
import addItemToCart from "./addToCartReducer";
import SearchTextState from "./searchTextReducer";
import isloggedIn from "./isLoggedInReducer";

const rootReducer = combineReducers({
    getSearchResult,
    addItemToCart,
    SearchTextState,
    isloggedIn
});

export default rootReducer;