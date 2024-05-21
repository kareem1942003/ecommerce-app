import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { useSelector } from "react-redux";
import CartsUi from "./UI/CartUi/CartsUi";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { ClerkProvider } from "@clerk/clerk-react";

function App() {
  // @ts-ignore
  const cartui = useSelector((state) => state.cartUi.cartIsOpen);
  // @ts-ignore
  const productCart = useSelector((state) => state.cart.cartItems);
  // @ts-ignore
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  // @ts-ignore
  const favorite = useSelector((state) => state.favorite);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productCart));
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [totalAmount, favorite, productCart]);

  // @ts-ignore
  const { VITE_CLERK_PUBLISHABLE_KEY } = import.meta.env;
  const PUBLISHABLE_KEY = VITE_CLERK_PUBLISHABLE_KEY;

  return (
    <>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Header />
        {cartui && <CartsUi />}
        <ToastContainer />
        <Outlet />
        <Footer />
      </ClerkProvider>
    </>
  );
}

export default App;
