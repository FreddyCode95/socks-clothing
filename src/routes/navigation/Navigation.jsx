import { useContext } from "react";
import {Link, Outlet} from "react-router-dom";

import {CartIcon} from "../../components/cartIcon/CartIcon";
import {CartDropdown} from "../../components/cartDropdown/CartDropdown";

import { UserContext } from "../../contexts/User.context";
import {CartContext} from "../../contexts/Cart.context";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import {signOutUser} from "../../utils/firebase/firebase.utils";

import './Navigation.scss';

export const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/' >Home</Link>
                    <Link className='nav-link' to='/shop' >Shop</Link>
                    { currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                    ) : (
                        <Link className='nav-link' to='/auth' >SIGN IN</Link>
                    )}
                    <CartIcon />
                </div>
                { isCartOpen && <CartDropdown /> }
            </div>
            <Outlet />
        </>
    )
}