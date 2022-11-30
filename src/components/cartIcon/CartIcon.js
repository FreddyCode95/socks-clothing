import { useDispatch, useSelector } from "react-redux";

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cartSelector";
import { setIsCartOpen } from "../../store/cart/cartActions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import './CartIcon.scss';


export const CartIcon = () => {
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    )
}