import { ACTION } from './cartTypes';

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],

};

export const cartReducer =  (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case ACTION.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload
            };
        case ACTION.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: action.payload
            };
        default:
            return state;
    }
}