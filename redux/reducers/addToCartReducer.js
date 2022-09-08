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
    }
    else if(action.type === "INCREASEQTY"){
        if (state.find(item => item.id === action.payload)){
            const index = state.findIndex(item => item.id === action.payload);
            const newState = [...state];
            newState[index].qty += 1;
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
            return state = newState;
        }
        else {
            return state
        }
    }
    else if(action.type === "DELETEFROMCART"){
        // if (state.find(item => item.id === action.payload)){
        //     const index = state.findIndex(item => item.id === action.payload);
        //     const newState = [...state];
        //     if(newState[index].qty === 1) {
        //         return state = newState
        //     }else {
        //         newState[index].qty -= 1;
        //     }
        //     return state = newState;
        // }
        // else {
        //     return state
        // }
        const newState = state.filter(item => item.id !== action.payload);
        return state = newState;
    }
    else {
        return state
    }
}

export default addItemToCart;