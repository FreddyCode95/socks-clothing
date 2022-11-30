import { ACTION } from './categoryTypes';
import { createAction } from '../../utils/reducer/reducerUtils';

export const setCategories = (categoriesArray) =>
    createAction(ACTION.SET_CATEGORIES, categoriesArray);