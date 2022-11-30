import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

// this is all memorized
export const selectCategories = createSelector(
    [selectCategoryReducer], // array of input selector
    (categoriesSlice) => categoriesSlice.categories // output selector
)

export const selectCategoriesMap = createSelector(
[selectCategories],
(categories) =>
                categories.reduce((accumulator, category) => { // as long as the categories array does not change, do not rerun this method
                const { title, items } = category;
                accumulator[title.toLowerCase()] = items;
        return accumulator;
    }, {})
);