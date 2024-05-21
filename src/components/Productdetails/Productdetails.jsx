/* eslint-disable react/prop-types */
import { Button, Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { toast } from "react-toastify";
import { cartAction } from "../../RTK/CartSlice";
import { useDispatch } from "react-redux";

// @ts-ignore
const Productdetails = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartAction.addItemToCart({
        id: item.id,
        title: item.attributes.title,
        price: item.attributes.price,
        image: item.attributes.image.data.attributes.url,
        description: item.attributes.description,
        rating: item.attributes.rating,
      })
    );
    toast.success("Successfully added to shopping cart", {
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
    <section style={{ padding: "20px" }}>
      <Container>
        <Row className="p-1">
          <Col lg="6" md="6" sm="12">
            <div className="d-flex align-items-center h-100">
              <img
                className="w-100"
                src={item.attributes.image.data.attributes.url}
                alt="sorry"
              />
            </div>
          </Col>
          <Col lg="6" md="6" sm="12">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "5px",
              }}
              className="content"
            >
              <h4>{item.attributes.title}</h4>
              <Rating
                name="text-feedback"
                // eslint-disable-next-line react/prop-types
                value={item.attributes.rating}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <h5>{item.attributes.price}$</h5>
              <p>{item.attributes.description}</p>
              <Button
                onClick={addToCart}
                style={{ transition: "0.4s", margin: "10px 0" }}
                className="w-100"
              >
                Add To Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Productdetails;
