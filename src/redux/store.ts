
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
/**
 * @file This file sets up the Redux store for the application.
 * It imports the `configureStore` function from Redux Toolkit and the `userReducer` from the user slice.
 * The store is configured with the `userReducer` under the `user` key.
 * 
 * @module store
 */
 /**
    * The Redux store configured with the user reducer.
    * 
    * @type {Store}
    */
 /**
    * Type representing the root state of the Redux store.
    * 
    * @typedef {ReturnType<typeof store.getState>} RootState
    */
 /**
    * Type representing the dispatch function of the Redux store.
    * 
    * @typedef {typeof store.dispatch} AppDispatch
    */
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;