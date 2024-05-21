import { Container, Row, Col } from "react-bootstrap";
// @ts-ignore
import { useGetproductByNameQuery } from "../../RTK/ProductSlice";
import ProductCard from "../../UI/Product Card/ProductCard";
import SkeletonCom from "../../components/skeleton/SkeletonCom";
// import FavoriteIcon from "@mui/icons-material/Favorite";

const Allproduct = () => {
  const { data } = useGetproductByNameQuery("products?populate=*");
  return (
    <section style={{ padding: "30px 0" }}>
      <Container>
        <h2 className="mb-3 fw-bold">Explore Our Product</h2>
        <Row>
          {data ? (
            data.data.map((item, i) => (
              <Col key={i} className="my-3" lg="3" md="4" sm="6" xs="12">
                <ProductCard item={item} />
              </Col>
            ))
          ) : (
            <SkeletonCom />
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Allproduct;
