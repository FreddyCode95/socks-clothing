
import { Button } from "../button/Button";

import './ProductCard.scss';
import {useContext} from "react";
import {CartContext} from "../../contexts/cartContext";

export const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

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

// HVAD JEG HAR LAVET OM TIL REDUX
// import { useDispatch, useSelector } from "react-redux";
//
// import { selectCartItems } from "../../store/cart/cartSelector";
// import { addItemToCart } from "../../store/cart/cartActions";
//
// import { Button } from "../button/Button";
//
// import './ProductCard.scss';
//
// export const ProductCard = ({ product }) => {
//     const { name, price, imageUrl } = product;
//     const dispatch = useDispatch();
//     const cartItems = useSelector(selectCartItems);
//
//     const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
//
//     return(
//         <div className="product-card-container">
//             <img src={imageUrl} alt={`${name}`} />
//             <div className="footer">
//                 <span className="name">{name}</span>
//                 <span className="price">{price}</span>
//             </div>
//             <Button buttonType="inverted" onClick={addProductToCart}>Add to card</Button>
//         </div>
//     )
// }

// TODO TEST

// import { useDispatch, useSelector } from 'react-redux';
//
// import { selectCartItems } from '../../store/cart/cart.selector';
// import { addItemToCart } from '../../store/cart/cart.action';
//
// import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
//
// import './ProductCard.scss';
//
// export const ProductCard = ({ product }) => {
//     const { name, price, imageUrl } = product;
//     const dispatch = useDispatch();
//     const cartItems = useSelector(selectCartItems);
//
//     const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
//
//     return(
//         <div className="product-card-container">
//             <img src={imageUrl} alt={`${name}`} />
//             <div className="footer">
//                 <span className="name">{name}</span>
//                 <span className="price">{price}</span>
//             </div>
//             <Button buttonType="inverted" onClick={addProductToCart}>Add to card</Button>
//         </div>
//     )
// };
