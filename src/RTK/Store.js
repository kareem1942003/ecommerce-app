import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./ProductSlice";
import CartSlice from "./CartSlice";
import CartUi from "./CartUi";
import FavoriteSlice from "./FavoriteSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: CartSlice,
    cartUi: CartUi,
    favorite: FavoriteSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
