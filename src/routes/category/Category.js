import { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import { useParams} from "react-router";

import { selectCategoriesMap } from "../../store/categories/categorySelector";

import { ProductCard } from "../../components/productCard/ProductCard";
import './Category.scss';

export const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
        <h2 className='category-title'>{ category.toUpperCase() }</h2>
        <div className="category-container">
            {products &&
                products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </>
    )
}