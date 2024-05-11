import { ReducerType, configureStore } from "@reduxjs/toolkit";

import ProductReducer from './slices/ProductsSlice'
import WishListReducer from "./slices/WishListSlice";
import CartReducer from "./slices/CartSlice";
import AddressReducer from "./slices/AddressSlice"
export const store = configureStore({
    reducer:{
        product:ProductReducer,
        wishList:WishListReducer,
        cart:CartReducer,
        address:AddressReducer
    }
})