import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// export const apiDatas = createAsyncThunk("api/apiDatas", async () => {
//   const response = await axios.get("localhost:5000/cars");
//   return response.data;
// });
export const apiDatas = createAsyncThunk("api/apiDatas", async () => {
  try {
    const response = await axios.get("http://localhost:5000/cars"); // Added http:// to the URL
    return response.data;
  } catch (error) {
    // Handle errors and return a rejected action
    return console.log(error, "tttt")
  }
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
