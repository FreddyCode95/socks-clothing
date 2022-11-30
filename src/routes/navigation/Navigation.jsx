import { Link, Outlet} from "react-router-dom";
import { useSelector } from "react-redux";

import { CartIcon } from "../../components/cartIcon/CartIcon";
import { CartDropdown } from "../../components/cartDropdown/CartDropdown";

import { selectIsCartOpen } from "../../store/cart/cartSelector";
import { selectCurrentUser } from "../../store/user/userSelector";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './Navigation.scss';

export const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/' >Home</Link>
                    <Link className='nav-link' to='/shop' >Shop</Link>
                    { currentUser
                        ? <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                        : <Link className='nav-link' to='/auth' >SIGN IN</Link>
                    }
                    <CartIcon />
                </div>
                { isCartOpen && <CartDropdown /> }
            </div>
            <Outlet />
        </>
    )
}