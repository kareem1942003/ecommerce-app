// @ts-nocheck
import Banar from "../../UI/Banar/Banar";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Row,
} from "react-bootstrap";
// @ts-ignore
import image from "../../../public/contactUs.png";
import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
const ContactUs = () => {
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [state, handleSubmit] = useForm("xpzvnvzb");
  const [messgae, setMessage] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      setMessage("We send your message for us");
      nameRef.current = "";
      emailRef.current = "";
      messageRef.current = "";
    }
  }, [state.succeeded]);

  return (
    <section style={{ paddingTop: "50px" }}>
      <Banar title={"Contact Us"} />
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <h2 className="text-center my-3">Write A Message</h2>
          </Col>
          <Col lg="6" md="6" sm="12">
            {state.errors && <Alert variant="danger">{state.errors}</Alert>}
            {messgae && <Alert variant="info">{messgae}</Alert>}
            <Form onSubmit={handleSubmit} ref={form}>
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
                  name="email"
                ></Form.Control>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </FormGroup>
              <FormGroup>
                <Form.Label htmlFor="message">Message Here</Form.Label>
                <Form.Control
                  value={messageRef.current}
                  style={{ height: "100px" }}
                  id="message"
                  name="message"
                ></Form.Control>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </FormGroup>
              <Button
                type="submit"
                disabled={state.submitting}
                style={{ transition: "0.3s", margin: "10px 0", width: "100%" }}
              >
                Send
              </Button>
            </Form>
          </Col>
          <Col lg="6" md="6" sm="12">
            <div>
              <img className="w-100" src={image} alt="sorry" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
