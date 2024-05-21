import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
// @ts-ignore

import { Link } from "react-router-dom";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { FacebookRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { useEffect, useState } from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  const [islogedIn, setIslogedin] = useState(false);
  useEffect(() => {
    setIslogedin(window.location.href.toString().includes("signin"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href]);
  return (
    !islogedIn && (
      <div>
        <footer
          style={{
            backgroundColor: "#a2cbf3",
            padding: "20px",
          }}
          className="footer"
        >
          <Container>
            <Row>
              <Col lg="3" md="4" sm="6">
                <div className=" footer__logo text-start">
                  <h5>Ecommerce</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt pariatur accusamus
                  </p>
                </div>
              </Col>

              <Col lg="3" md="4" sm="6">
                <h5 className="footer__title">Delivery Time</h5>
                <ListGroup className="deliver__time-list">
                  <ListGroupItem
                    style={{ backgroundColor: "#a2cbf3" }}
                    className=" delivery__time-item border-0 ps-0"
                  >
                    <span>Sunday - Thursday</span>
                    <p>10:00am - 11:00pm</p>
                  </ListGroupItem>

                  <ListGroupItem
                    style={{ backgroundColor: "#a2cbf3" }}
                    className=" delivery__time-item border-0 ps-0"
                  >
                    <span>Friday - Saturday</span>
                    <p>Off day</p>
                  </ListGroupItem>
                </ListGroup>
              </Col>

              <Col lg="3" md="4" sm="6">
                <h5 className="footer__title">Contact</h5>
                <ListGroup className="deliver__time-list">
                  <ListGroupItem
                    style={{ backgroundColor: "#a2cbf3" }}
                    className=" delivery__time-item border-0 ps-0"
                  >
                    <p>Location: cairo, cairo-3100, Egypt</p>
                  </ListGroupItem>
                  <ListGroupItem
                    style={{ backgroundColor: "#a2cbf3" }}
                    className=" delivery__time-item border-0 ps-0"
                  >
                    <span>Phone: 01096106338</span>
                  </ListGroupItem>

                  <ListGroupItem
                    style={{ backgroundColor: "#a2cbf3" }}
                    className=" delivery__time-item border-0 ps-0"
                  >
                    <span>Email: karem1941999@gmail.com</span>
                  </ListGroupItem>
                </ListGroup>
              </Col>

              <Col lg="3" md="4" sm="6">
                <h5 className="footer__title">Newsletter</h5>
                <p>Subscribe our newsletter</p>
                <div
                  style={{
                    border: "1px solid #000",
                    padding: "10px",
                    width: "fit-content",
                    borderRadius: "5px",
                  }}
                  className="newsletter"
                >
                  <input
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                    type="email"
                    placeholder="Enter your email"
                  />
                  <span
                    style={{
                      backgroundColor: "#212245",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >
                    <SendRoundedIcon />
                  </span>
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col lg="6" md="6">
                <p className="copyright__text">
                  Copyright - {year}, website made by Kareem Mahmoud. All Rights
                  Reserved.
                </p>
              </Col>
              <Col lg="6" md="6">
                <div className="social__links d-flex align-items-center gap-4 justify-content-end">
                  <p className="m-0">Follow: </p>
                  <span>
                    {" "}
                    <Link
                      target="_blank"
                      style={{ color: "#212245" }}
                      to="https://www.facebook.com/profile.php?id=100022210742047"
                    >
                      <FacebookRounded />
                    </Link>{" "}
                  </span>

                  <span>
                    <Link
                      target="_blank"
                      style={{ color: "#212245" }}
                      to="https://github.com/kareem1942003"
                    >
                      <GitHub />
                    </Link>
                  </span>

                  <span>
                    {" "}
                    <Link
                      style={{ color: "#212245" }}
                      target="_blank"
                      to="https://www.linkedin.com/in/kareem-mahmoud-644078228/"
                    >
                      <LinkedIn />
                    </Link>{" "}
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    )
  );
};

export default Footer;
