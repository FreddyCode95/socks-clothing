import { Routes, Route } from 'react-router-dom';

import {CategoriesPreview} from "../categoriesPreview/CategoriesPreview";

import './Shop.scss';
import {Category} from "../category/Category";

export const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />

        </Routes>
    );
};