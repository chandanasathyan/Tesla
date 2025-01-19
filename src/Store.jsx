import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./ApiSlice/ApiSlice";

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});
