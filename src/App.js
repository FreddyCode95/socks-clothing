import './App.css';
import {useEffect} from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from 'react-router-dom';

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { Home } from "./routes/home/Home";
import { Navigation } from "./routes/navigation/Navigation";
import { Authentication } from "./routes/authentication/Authentication";
import { Shop } from "./routes/shop/Shop";
import { Checkout } from "./routes/checkout/Checkout";
import { setCurrentUser } from './store/user/userActions';

const App = () => {
    const dispatch = useDispatch();

    // This effect only runs on initialzation in order to set up this listener.
    // React Redux will only generate one dispatch, and will never change that reference.
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });

        return unsubscribe;
    },[]);

    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='shop/*' element={<Shop />} />
                <Route path='auth' element={<Authentication />} />
                <Route path='checkout' element={<Checkout />} />

            </Route>
        </Routes>

    );
}

export default App;