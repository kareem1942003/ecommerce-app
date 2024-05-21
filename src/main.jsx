import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./Pages/Home/Main.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./Pages/Products/Products.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Categorys from "./Pages/Categorys/Categorys.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Favorite from "./Pages/Favorite/Favorite.jsx";
import { Provider } from "react-redux";
import { store } from "./RTK/Store.js";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./components/Checkout/Checkout.jsx";
import Signin from "./components/LoginPage/Signin.jsx";
import RequireAuth from "./RequireAuth/RequireAuth.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Main />} />
      <Route path="/products" element={<Products />} />
      <Route path="/category" element={<Categorys />} />
      <Route
        path="/cart"
        element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        }
      />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
