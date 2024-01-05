import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOrderDetails = createAsyncThunk(
  "orderDetails/fetchOrderDetails",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://tracking.bosta.co/shipments/track/${orderId}?lang=ar`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
