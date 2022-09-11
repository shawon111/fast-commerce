import getSearchResult from "./searchResultReducer";
import { combineReducers } from "redux";
import addItemToCart from "./addToCartReducer";
import SearchTextState from "./searchTextReducer";

const rootReducer = combineReducers({
    getSearchResult,
    addItemToCart,
    SearchTextState
});

export default rootReducer;