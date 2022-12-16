import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { CategoriesPreview } from "../categoriesPreview/CategoriesPreview";

import './Shop.scss';
import { Category } from "../category/Category";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesStartAsync } from "../../store/categories/categoryActions";

export const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStartAsync());
    }, []);

     return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />

        </Routes>
    );
};