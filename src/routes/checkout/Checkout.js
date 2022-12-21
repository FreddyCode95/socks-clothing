import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import {selectCartItems, selectCartTotal, selectIsCartOpen} from "../../store/cart/cartSelector";
import {setIsCartOpen} from "../../store/cart/cartActions";

import { CheckoutItem } from "../../components/checkoutItem/checkoutItem";
import {PaymentForm} from "../../components/paymentForm/PaymentForm";

import './Checkout.scss';

export const Checkout = () => {
    // const { cartItems, cartTotal } = useContext(CartContext);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const isCartOpen = useSelector(selectIsCartOpen);

    // closes cartDropDown going to Checkout page/routes
    useEffect(() => {
        dispatch(setIsCartOpen(!isCartOpen));
        // dispatch({  // just demo for what is happening above on one line
        //         type: ACTION.SET_IS_CART_OPEN,
        //         payload: false
        // });
    },[]);


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