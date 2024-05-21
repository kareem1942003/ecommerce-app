import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import hero from "../../../public/hero.png";
import { ShoppingBagRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section style={{ padding: "30px 0" }}>
      <Container>
        <Row>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 20px",
            }}
            lg="6"
            md="6"
            sm="12"
          >
            <div className="hero-text">
              <h6 style={{ color: "#2893ff" }}>You Can Order Now</h6>
              <h1 style={{ margin: "20px 0" }}>Roco Wireless Headphone</h1>
              <button
                onClick={() => navigate("/products")}
                style={{
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  boxShadow: "0 0 10px #d2d2d2",
                }}
              >
                <ShoppingBagRounded /> <span> Showpping Now</span>
              </button>
            </div>
          </Col>
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
            <img className="hero" width={500} src={hero} alt="sorry" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
