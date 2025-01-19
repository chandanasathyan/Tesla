import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const apiDatas = createAsyncThunk("api/apiDatas", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});


const initialState = {
  loading: false,
  apiData: [],
  selectProduct: {},
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(apiDatas.pending, (state) => {
        state.loading = true;
      })
      .addCase(apiDatas.fulfilled, (state, action) => {
        state.loading = false;
        state.apiData = action.payload;
      })
      .addCase(apiDatas.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default apiSlice.reducer;
