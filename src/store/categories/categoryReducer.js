import { ACTION } from './categoryTypes';

const INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
};

export const categoriesReducer =  (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case ACTION.FETCH_CATEGORIES_START:
            return { ...state, isLoading: true }
        case ACTION.FETCH_CATEGORIES_SUCCES:
            return { ...state, categories: action.payload, isLoading: false }
        case ACTION.FETCH_CATEGORIES_Failed:
            return { ...state, error: action.payload, isLoading: false };
        default:
            return state;
    }
}