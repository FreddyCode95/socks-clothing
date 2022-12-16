import { ACTION } from './categoryTypes';
import { createAction } from '../../utils/reducer/reducerUtils';
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

// export const setCategories = (categoriesArray) => // old way e. 169-170
//     createAction(ACTION.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () => createAction(ACTION.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) => createAction(ACTION.FETCH_CATEGORIES_SUCCES, categoriesArray);

export const fetchCategoriesFailure = (error) => createAction(ACTION.FETCH_CATEGORIES_Failed, error);

export const fetchCategoriesStartAsync = () => {
    return async (dispatch) => {
        dispatch(fetchCategoriesStart());
        try {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            dispatch(fetchCategoriesSuccess(categoriesArray));
        } catch (error) {
            dispatch(fetchCategoriesFailure(error));
        }
    };
};
