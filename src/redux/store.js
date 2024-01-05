// store.js
import { configureStore } from "@reduxjs/toolkit";
import orderDetailsReducer from "./orderDetailsSlice";

const store = configureStore({
  reducer: {
    orderDetails: orderDetailsReducer,
  },
});

export default store;
