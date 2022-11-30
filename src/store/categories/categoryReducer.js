import { ACTION } from './categoryTypes';

const INITIAL_STATE = {
    categories: [],
};

export const categoriesReducer =  (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case ACTION.SET_CATEGORIES:
            return { ...state, categories : action.payload};
        default:
            return state;
    }
}