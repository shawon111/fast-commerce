const initialState = [];

const addItemToCart = (state = initialState, action) => {

    if (action.type === "ADDTOCARTSINGLE") {
        if (state.find(item => item.id === action.payload.id)) {
            const index = state.findIndex(item => item.id === action.payload.id);
            const newState = [...state];
            newState[index].qty += 1;
            return state = newState
        }
        else {
            return state = [action.payload, ...state]
        }
    }

    else if (action.type === "ADDTOCART") {
        if (state.find(item => item.id === action.payload.id)) {
            const index = state.findIndex(item => item.id === action.payload.id);
            const newState = [...state];
            newState[index].qty = action.payload.qty;
            return state = newState
        }
        else {
            return state = [action.payload, ...state]
        }
    }else {
        return state
    }
}

export default addItemToCart;