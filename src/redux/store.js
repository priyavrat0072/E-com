import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from './slices/ProductsSlice'
import WishListReducer from "./slices/WishListSlice";
import CartReducer from "./slices/CartSlice";
export const store = configureStore({
    reducer:{
        product:ProductReducer,
        wishList:WishListReducer,
        cart:CartReducer,
    }
})