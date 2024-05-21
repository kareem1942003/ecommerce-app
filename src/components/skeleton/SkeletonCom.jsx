import Skeleton from "@mui/material/Skeleton";
import { Col, Container, Row } from "react-bootstrap";

const SkeletonCom = () => {
  return (
    <Container>
      <Row>
        <Col className="mb-2" lg="3" md="4" sm="12" xs="12">
          <Skeleton variant="rectangular" width={"100%"} height={218} />
        </Col>
        <Col className="mb-2" lg="3" md="4" sm="12" xs="12">
          <Skeleton variant="rectangular" width={"100%"} height={218} />
        </Col>
        <Col className="mb-2" lg="3" md="4" sm="12" xs="12">
          <Skeleton variant="rectangular" width={"100%"} height={218} />
        </Col>
        <Col className="mb-2" lg="3" md="4" sm="12" xs="12">
          <Skeleton variant="rectangular" width={"100%"} height={218} />
        </Col>
      </Row>
    </Container>
  );
};

export default SkeletonCom;
