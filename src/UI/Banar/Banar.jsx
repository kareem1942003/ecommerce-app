import { Container } from "react-bootstrap";
// @ts-ignore

// eslint-disable-next-line react/prop-types
const Banar = ({ title }) => {
  return (
    <div className="banar_section">
      <Container>
        <h2 style={{ fontWeight: "bold", fontSize: "50px", color: "#2893ff" }}>
          {title}
        </h2>
      </Container>
    </div>
  );
};

export default Banar;
