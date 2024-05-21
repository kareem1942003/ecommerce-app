import { Col, Container, Row } from "react-bootstrap";

// @ts-ignore
import image from "../../../public/pageNotFound.png";

const NotFound = () => {
  return (
    <section style={{ paddingTop: "50px" }}>
      <Container>
        <Row>
          <Col lg="12">
            <div className="d-flex justify-center ">
              <img className="w-50" src={image} alt="soory" />
            </div>
          </Col>
          <Col lg="12">
            <h1 className="text-center my-3 fw-900">
              OPS! We Can Not Find Teh Page
            </h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotFound;
