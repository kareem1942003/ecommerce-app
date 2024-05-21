import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  initialState: localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite"))
    : [],
  name: "favoriteSlice",
  reducers: {
    addItemToCart: (state, action) => {
      const findItem = state.find((item) => {
        return item.id === action.payload.id;
      });
      if (!findItem) {
        state.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          image: action.payload.image,
          rating: action.payload.rating,
          description: action.payload.description,
        });
      }
    },
    deleteItemFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const favoriteAction = favoriteSlice.actions;

export default favoriteSlice.reducer;
