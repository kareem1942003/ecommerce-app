import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [],
  totalQuantity: 0,
  totalAmount: localStorage.getItem("totalAmount")
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0,
};
// localStorage.clear();
const cartSlice = createSlice({
  initialState: initialState,
  name: "cartSlice",
  reducers: {
    addItemToCart: (state, action) => {
      const findItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      state.totalQuantity++;
      if (!findItem) {
        state.cartItems.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          image: action.payload.image,
          rating: action.payload.rating,
          description: action.payload.description,
          totalPrice: action.payload.price,
          quantity: 1,
        });
      } else {
        findItem.quantity++;
        findItem.totalPrice =
          Number(findItem.totalPrice) + Number(action.payload.price);
      }
      state.totalAmount = state.cartItems.reduce((acc, item) => {
        acc += item.price * item.quantity;
        return acc;
      }, 0);
    },
    deleteItemFromCart: (state, action) => {
      const id = action.payload;
      const findItem = state.cartItems.find((item) => {
        return item.id === id;
      });
      if (findItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - findItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce((acc, item) => {
        acc += item.price * item.quantity;
        return acc;
      }, 0);
    },
    removeItemFromCart: (state, action) => {
      const findItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      state.totalQuantity--;
      if (findItem.quantity == 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      } else {
        findItem.quantity--;
        findItem.totalPrice = findItem.totalPrice - findItem.price;
      }
      state.totalAmount = state.cartItems.reduce((acc, item) => {
        acc = acc + item.price * item.quantity;
        return acc;
      }, 0);
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
