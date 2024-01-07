// orderDetailsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchOrderDetails } from "./thunk";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.data = null;
      });
  },
});

export default orderDetailsSlice.reducer;
