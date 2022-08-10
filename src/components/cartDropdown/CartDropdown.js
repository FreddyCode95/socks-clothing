import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import {CartContext} from "../../contexts/Cart.context";
import {Button} from "../button/Button";

import {CartItem} from "../cartItem/CartItem";
import './CartDropdown.scss';

export const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item}/>
                    ))}
            </div>
            <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
        </div>
    )
}