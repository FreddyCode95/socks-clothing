import { useDispatch, useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../store/cart/cartSelector";

import { CheckoutItem } from "../../components/checkoutItem/checkoutItem";

import './Checkout.scss';

export const Checkout = () => {
    // const { cartItems, cartTotal } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (

        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Description</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Price</span></div>
                <div className="header-block"><span>Remove</span></div>
            </div>

            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <span className="total-price">Total: ${cartTotal}</span>
        </div>
    )
}