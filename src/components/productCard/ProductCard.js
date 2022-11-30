import { useDispatch, useSelector} from "react-redux";

import { addItemToCart} from "../../store/cart/cartActions";

import { Button } from "../button/Button";

import './ProductCard.scss';
import {selectCartItems} from "../../store/cart/cartSelector";


export const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return(
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addProductToCart}>Add to card</Button>
        </div>
    )
}