import { configureStore} from "@reduxjs/toolkit";
import logger from 'redux-logger';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { loggerMiddleware } from "./middleware/logger"; //own logger function
import thunk from 'redux-thunk';

import { rootReducer } from "./root-reducer";
// Middle wears our kind of like little library helpers that run before an action hits the reducer.
//
// So whenever you dispatch an action before that action hits the reducers, it hits the middleware first.

// Instead of our own loggerMiddleware we can use the import logger line 2 instead!
// is just a sequence of curried functions


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: middleWares,
    // composeEnhancer,
});

export const persistor = persistStore(store);


// Old way
// const middleWares = [logger]
//
// const composeEnhancers = compose(applyMiddleware(...middleWares));
//
// export const store = createStore(rootReducer, undefined, composeEnhancers);