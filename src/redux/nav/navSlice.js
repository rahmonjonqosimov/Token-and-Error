import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    navLogin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { navLogin } = navSlice.actions;
export default navSlice.reducer;
