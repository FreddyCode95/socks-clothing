import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
// simple explanation for redux
    //https://www.youtube.com/watch?v=CVpUuw9XSjY

// we use this to combine reducers which allows us to create a final big reducer can use inside
// of our store by combining smaller reducers together.

export const rootReducer = combineReducers({
        user: userReducer
});