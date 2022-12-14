import { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import { useParams} from "react-router";

import { ProductCard } from "../../components/productCard/ProductCard";
import { Spinner } from "../../components/spinner/Spinner";
import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/categories/categorySelector";

import './Category.scss';
import {Link} from "react-router-dom";

export const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
        <div className="category-mobile-container">
            <h2 className='category-title'>{ category.toUpperCase() }</h2>
                {isLoading
                    ? <Spinner />
                    : <div className="category-container">
                        {products &&
                            products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                    </div>
                }
        </div>
        </>
    )
}