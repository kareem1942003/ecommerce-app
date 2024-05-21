import { createSlice } from "@reduxjs/toolkit";

const cartUi = createSlice({
  name: "cartUi",
  initialState: { cartIsOpen: false },
  reducers: {
    // @ts-ignore
    toggleCartUI: (state) => {
      state.cartIsOpen = !state.cartIsOpen;
    },
  },
});

export const { toggleCartUI } = cartUi.actions;

export default cartUi.reducer;
