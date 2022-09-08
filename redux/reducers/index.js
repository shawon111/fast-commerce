import getSearchResult from "./searchResultReducer";
import { combineReducers } from "redux";
import addItemToCart from "./addToCartReducer";

const rootReducer = combineReducers({
    getSearchResult,
    addItemToCart
});

export default rootReducer;