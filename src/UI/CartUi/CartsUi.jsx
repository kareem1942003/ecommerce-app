import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CartUiItems from "./CartUiItems";
import { toggleCartUI } from "../../RTK/CartUi";
// @ts-ignore
const CartsUi = () => {
  // @ts-ignore
  const products = useSelector((state) => state.cart.cartItems);
  // @ts-ignore
  const totalPrice = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(toggleCartUI());
  };
  return (
    <section className="cart_container">
      <ListGroup className="cart">
        <div
          style={{
            zIndex: "1000000",
            padding: "20px",
          }}
        >
          <span
            // @ts-ignore
            onClick={handleClose}
            style={{
              backgroundColor: "#2893ff",
              color: "white",
              padding: "5px 10px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            X
          </span>
        </div>
        <div
          style={{ minHeight: "75%", overflowY: "scroll" }}
          className="items"
        >
          {products.length ? (
            products.map((item, i) => <CartUiItems key={i} item={item} />)
          ) : (
            <h4 className="text-center py-4 text-primary">
              Your Cart Is Empty{" "}
            </h4>
          )}
        </div>
        <div className="totalprice p-3">
          <h4>Total Amount is {totalPrice.toFixed(2)}$</h4>
        </div>
      </ListGroup>
    </section>
  );
};

export default CartsUi;
