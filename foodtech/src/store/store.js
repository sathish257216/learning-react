import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import restaurantReducer from './reducers/restaurantSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        restaurants: restaurantReducer
    }
});


export default store;