import { useSelector } from "react-redux";

import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/categories/categorySelector";

import { CategoryPreview } from "../../components/categoryPreview/CategoryPreview";
import {Spinner} from "../../components/spinner/Spinner";


export const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <>
            { isLoading
                ? <Spinner />
                : ( Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products}/>
                    })
                )
            }
        </>
    );
};