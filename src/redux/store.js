import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./nav/navSlice";

export const store = configureStore({
  reducer: {
    nav: navSlice,
  },
});
