import { useDispatch, useSelector } from "react-redux";

import {selectCartItems, selectCartTotal, selectIsCartOpen} from "../../store/cart/cartSelector";

import { CheckoutItem } from "../../components/checkoutItem/checkoutItem";

import './Checkout.scss';
import {PaymentForm} from "../../components/paymentForm/PaymentForm";
import {setIsCartOpen} from "../../store/cart/cartActions";

export const Checkout = () => {
    // const { cartItems, cartTotal } = useContext(CartContext);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const isCartOpen = useSelector(selectIsCartOpen);

    // console.log(isCartOpen)
    // console.log("set",setIsCartOpen())

    if (isCartOpen) {
        dispatch(setIsCartOpen(!setIsCartOpen));
    }
    // dispatch(setIsCartOpen(isCartOpen));
    // dispatch(setIsCartOpen(false));

    return (

        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Description</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block-price"><span>Price</span></div>
                <div className="header-block"><span>Remove</span></div>
            </div>

            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <span className="total-price">Total: {cartTotal},00 kr</span>
            <PaymentForm />
        </div>
    )
}