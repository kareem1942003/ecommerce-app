import Banar from "../../UI/Banar/Banar";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
// @ts-ignore
import paymentImage from "../../../public/payment.png";
import { useRef } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  // @ts-ignore
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const postCodeRef = useRef();

  return (
    <section style={{ paddingTop: "50px" }}>
      <Banar title={"Checkout"} />
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="my-3">The amount you must pay is {totalAmount}$</h4>
          </Col>
          <Col className="d-flex align-items-center mb-3" lg="6" md="6" sm="12">
            <Form className="w-100">
              <FormGroup>
                <Form.Label htmlFor="fullName">Full Name</Form.Label>
                <Form.Control
                  id="fullName"
                  placeholder="Full Name"
                  value={nameRef.current}
                ></Form.Control>
              </FormGroup>
              <FormGroup>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  value={emailRef.current}
                  id="email"
                  placeholder="Email"
                ></Form.Control>
              </FormGroup>
              <FormGroup>
                <Form.Label htmlFor="phone">Phone</Form.Label>
                <Form.Control
                  type="number"
                  value={phoneRef.current}
                  id="phone"
                  placeholder="Your Phone"
                ></Form.Control>
              </FormGroup>
              <FormGroup>
                <Form.Label htmlFor="address">Your address</Form.Label>
                <Form.Control
                  value={addressRef.current}
                  id="address"
                  placeholder="Your address"
                ></Form.Control>
              </FormGroup>
              <FormGroup>
                <Form.Label htmlFor="code">Your Post Code</Form.Label>
                <Form.Control
                  type="number"
                  value={postCodeRef.current}
                  id="code"
                  placeholder="Code"
                ></Form.Control>
              </FormGroup>
              <Button
                type="submit"
                disabled={false}
                style={{ transition: "0.3s", margin: "10px 0", width: "100%" }}
              >
                Payment Now
              </Button>
            </Form>
          </Col>
          <Col className="d-flex align-items-center" lg="6" md="6" sm="12">
            <div>
              <img className="w-100" src={paymentImage} alt="sorry" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Checkout;
