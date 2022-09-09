let initialState = [];

const addItemToCart = (state = initialState, action) => {
    if(action.type === "SETINITIALSTATE"){
        const newState = action.payload;
        return state = newState
    }
    if (action.type === "ADDTOCARTSINGLE") {
        if (state.find(item => item.id === action.payload.id)) {
            const index = state.findIndex(item => item.id === action.payload.id);
            const newState = [...state];
            newState[index].qty += 1;
            localStorage.setItem("cart_items", JSON.stringify(newState));
            return state = newState
        }
        else {
            localStorage.setItem("cart_items", JSON.stringify([action.payload, ...state]))
            return state = [action.payload, ...state]
        }
    }

    else if (action.type === "ADDTOCART") {
        if (state.find(item => item.id === action.payload.id)) {
            const index = state.findIndex(item => item.id === action.payload.id);
            const newState = [...state];
            newState[index].qty = action.payload.qty;
            localStorage.setItem("cart_items", JSON.stringify(newState));
            return state = newState
        }
        else {
            localStorage.setItem("cart_items", JSON.stringify([action.payload, ...state]))
            return state = [action.payload, ...state]
        }
    }
    else if(action.type === "INCREASEQTY"){
        if (state.find(item => item.id === action.payload)){
            const index = state.findIndex(item => item.id === action.payload);
            const newState = [...state];
            newState[index].qty += 1;
            localStorage.setItem("cart_items", JSON.stringify(newState));
            return state = newState;
        }
        else {
            return state
        }
    }

    else if(action.type === "DECREASEQTY"){
        if (state.find(item => item.id === action.payload)){
            const index = state.findIndex(item => item.id === action.payload);
            const newState = [...state];
            if(newState[index].qty === 1) {
                return state = newState
            }else {
                newState[index].qty -= 1;
            }
            localStorage.setItem("cart_items", JSON.stringify(newState));
            return state = newState;
        }
        else {
            return state
        }
    }
    else if(action.type === "DELETEFROMCART"){
        const newState = state.filter(item => item.id !== action.payload);
        localStorage.setItem("cart_items", JSON.stringify(newState));
        return state = newState;
    }
    else {
        return state
    }
}

export default addItemToCart;