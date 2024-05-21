import { Button, Col, Container, Row } from "react-bootstrap";
import Hero from "../../components/hero/Hero";
// @ts-ignore
import headPhone from "../../../public/download.jpeg";
// @ts-ignore
import airpoad from "../../../public/AirPodsPRO with Wireless Charging Case,with Superb BASS Sound,Great Battery Backup(Black).jpeg";
// @ts-ignore
import secondMain from "../../../public/second hero.jpeg";
import Allproduct from "../../components/AllProduct/Allproduct";
import SliderCom from "../../UI/Slider/Slider";
import CustomerSlider from "../../UI/CustomerSlider/CustomerSlider";
// @ts-ignore
import socilaImage from "../../../public/undraw_Social_interaction_re_dyjh.png";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  return (
    <div style={{ paddingTop: "50px" }}>
      <Hero />
      <section style={{ padding: "30px 0" }}>
        <Container>
          <h2 className="mb-3 fw-bold">Browsw By Category</h2>
          <Row>
            <Col className="category" lg="6" md="6" sm="6" xs="12">
              <div
                onClick={() => navigate("/category")}
                style={{
                  boxShadow: "0 0 10px #d2d2d2",
                  borderRadius: "5px",
                  padding: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "10px",
                  margin: "10px",
                  cursor: "pointer",
                }}
              >
                <img
                  width={150}
                  src={airpoad}
                  alt="sorry"
                  loading="lazy"
                  className="product-imag w-50"
                />
                <h3>Air Poad</h3>
              </div>
            </Col>
            <Col className="category" lg="6" md="6" sm="6" xs="12">
              <div
                onClick={() => navigate("/category")}
                style={{
                  boxShadow: "0 0 10px #d2d2d2",
                  borderRadius: "5px",
                  padding: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "10px",
                  margin: "10px",
                  cursor: "pointer",
                }}
              >
                <img
                  width={150}
                  src={headPhone}
                  alt="sorry"
                  loading="lazy"
                  className="product-imag w-50"
                />
                <h3>Head Phone</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <SliderCom />
      <section style={{ padding: "30px 0" }}>
        <Container>
          <Row>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              lg="6"
              md="6"
              sm="12"
            >
              <div className="hero-text">
                <h1>Enhance Your Music Experiance</h1>
                <Button
                  onClick={() => navigate("/products")}
                  style={{ transition: "0.4s", margin: "10px 0" }}
                >
                  Order Now
                </Button>
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={secondMain}
                  className="hero"
                  width={500}
                  loading="lazy"
                  alt="sorry"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Allproduct />
      <section style={{ padding: "30px 0" }}>
        <Container>
          <Row>
            <Col lg="6" md="12">
              <img className="w-100" src={socilaImage} alt="sorry" />
            </Col>
            <Col lg="6" md="12">
              <div>
                <h5 style={{ color: "#2893ff" }}>TestImonial</h5>
                <h2 style={{ fontWeight: "bold" }}>
                  What our <span style={{ color: "#2893ff" }}>Customers</span>{" "}
                  are sayinf
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Alias voluptatem non laborum eveniet odit ut sed ducimus
                  recusandae distinctio ullam deleniti dicta exercitationem
                  tempore vitae, modi sunt aperiam nam explicabo?
                </p>
                <CustomerSlider />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Main;
