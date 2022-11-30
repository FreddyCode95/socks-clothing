import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger';
import { rootReducer } from "./root-reducer";

// Middle wears our kind of like little library helpers that run before an action hits the reducer.
//
// So whenever you dispatch an action before that action hits the reducers, it hits the middleware first.

// Instead of our own loggerMiddleware we can use the import logger line 2 instead!
// is just a sequence of curried functions
const loggerMiddleware = (store)  => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());

    next(action);


    console.log('next state: ', store.getState());
}
export const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware],
});
// Old way
// const middleWares = [logger]
//
// const composeEnhancers = compose(applyMiddleware(...middleWares));
//
// export const store = createStore(rootReducer, undefined, composeEnhancers);