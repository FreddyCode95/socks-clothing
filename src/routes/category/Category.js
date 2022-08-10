import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";

import {CategoriesContext} from "../../contexts/Categories.context";

import {ProductCard} from "../../components/productCard/ProductCard";
import './Category.scss';

export const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
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