// @ts-nocheck
/* eslint-disable react/prop-types */
import Banar from "../../UI/Banar/Banar";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { cartAction } from "../../RTK/CartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Cart = () => {
  // @ts-ignore
  const products = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalAmount);

  const navigate = useNavigate();

  return (
    <div style={{ paddingTop: "50px" }}>
      <Banar title={"Your Cart"} />
      <section style={{ padding: "30px 0" }}>
        <Container>
          <Row>
            <Col lg="12">
              {products.length ? (
                <table className="table table-bordered">
                  <thead>
                    <tr className="text-center w-100">
                      <th>Image</th>
                      <th className="tableTitle">Title</th>
                      <th>Price</th>
                      <th>Qountity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item, i) => (
                      <Tr item={item} key={i} />
                    ))}
                  </tbody>
                </table>
              ) : (
                <h5 className="text-center py-5">Cart is empty</h5>
              )}
            </Col>
            <Col lg="12">
              <h3 className="my-3">Total Price is {totalPrice.toFixed(2)}$</h3>
              <div className="d-flex gap-3">
                <Button
                  onClick={() => navigate("/products")}
                  style={{ transition: "0.4s" }}
                  variant="outline-primary"
                >
                  Continue To Shopping
                </Button>
                <Button
                  onClick={() => navigate("/checkout")}
                  style={{ transition: "0.4s" }}
                  variant="primary"
                >
                  Checkuot
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    // @ts-ignore
    dispatch(cartAction.deleteItemFromCart(item.id));
    toast.warn("You have removed it from your cart", {
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
  return (
    <tr className="text-center">
      <td>
        <img src={item.image} alt="" style={{ width: "40px" }} />
      </td>
      <td className="tableTitle">{item.title}</td>
      <td>${item.price}</td>
      <td>X{item.quantity}</td>
      <td onClick={deleteItem} style={{ cursor: "pointer" }}>
        <DeleteRoundedIcon />
      </td>
    </tr>
  );
};

export default Cart;
