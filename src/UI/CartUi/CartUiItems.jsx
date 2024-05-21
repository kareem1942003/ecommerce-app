/* eslint-disable react/prop-types */

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useDispatch } from "react-redux";
import { cartAction } from "../../RTK/CartSlice";
import { toast } from "react-toastify";

const CartUiItems = ({ item }) => {
  const dispatch = useDispatch();
  const deleteFromCartUi = () => {
    dispatch(cartAction.deleteItemFromCart(item.id));
    toast.warn("You have removed it from your shopping cart", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const quantityPlus = () => {
    dispatch(
      cartAction.addItemToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
      })
    );
  };
  const quantityMinus = () => {
    dispatch(cartAction.removeItemFromCart(item.id));
  };
  // @ts-ignore
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "5px 0",
        cursor: "pointer",
        padding: "10px 20px",
      }}
      className="cart__item__info"
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <img style={{ width: "60px" }} src={item.image} alt="sorry" />
        <div className="cart__product__info">
          <h6 style={{ color: "#2893ff", fontWeight: "bold" }}>{item.title}</h6>
          <p style={{ display: "flex", gap: "50px" }}>
            {item.quantity}x{" "}
            <span style={{ color: "#2893ff", fontWeight: "bold" }}>
              ${item.totalPrice.toFixed(2)}
            </span>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              background: "#73b9ff74",
              padding: "5px 10px",
            }}
          >
            <span onClick={quantityPlus}>
              <AddRoundedIcon />
            </span>
            <span>{item.quantity}</span>
            <span onClick={quantityMinus}>
              <RemoveRoundedIcon />
            </span>
          </div>
        </div>
      </div>
      <span onClick={deleteFromCartUi}>
        <CloseRoundedIcon />
      </span>
    </div>
  );
};

export default CartUiItems;
