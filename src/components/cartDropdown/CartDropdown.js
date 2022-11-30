import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "../button/Button";
import { CartItem } from "../cartItem/CartItem";
import { selectCartItems } from "../../store/cart/cartSelector";

import './CartDropdown.scss';

export const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.length
                    ? (cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>)))
                    : (<div className="empty-message">Your cart is empty</div>)}
            </div>
            <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
        </div>
    )
}