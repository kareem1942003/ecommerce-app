import { useEffect, useState } from "react";
import { useGetproductByNameQuery } from "../../RTK/ProductSlice";
import Banar from "../../UI/Banar/Banar";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../UI/Product Card/ProductCard";
import SkeletonCom from "../../components/skeleton/SkeletonCom";

const Categorys = () => {
  const { data } = useGetproductByNameQuery("products?populate=*");

  const [products, setProducts] = useState(data && data.data);

  const [category, setCategory] = useState("All");
  useEffect(() => {
    if (category === "All") {
      setProducts(data && data.data);
    }
    if (category === "HeadPhone") {
      const filterCategory =
        data &&
        data.data.filter((item) => item.attributes.category === "headPhone");
      setProducts(filterCategory);
    }
    if (category === "AirPoads") {
      const filterCategory =
        data &&
        data.data.filter((item) => item.attributes.category === "airPoads");
      setProducts(filterCategory);
    }
  }, [data, category]);
  return (
    <section style={{ paddingTop: "50px" }}>
      <Banar title={"Our Category"} />
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="py-4">We Have Two Category</h4>
          </Col>
          <Col lg="12">
            <div className="d-flex gap-3 my-3">
              <button
                onClick={() => setCategory("All")}
                className={category === "All" ? "bg-primary" : ""}
                style={{
                  padding: "10px",
                  border: "1px solid #2893ff",
                  background: "transparent",
                  borderRadius: "5px",
                }}
              >
                All
              </button>
              <button
                onClick={() => setCategory("AirPoads")}
                className={category === "AirPoads" ? "bg-primary" : ""}
                style={{
                  padding: "10px",
                  border: "1px solid #2893ff",
                  background: "transparent",
                  borderRadius: "5px",
                }}
              >
                AirPoads
              </button>
              <button
                onClick={() => setCategory("HeadPhone")}
                className={category === "HeadPhone" ? "bg-primary" : ""}
                style={{
                  padding: "10px",
                  border: "1px solid #2893ff",
                  background: "transparent",
                  borderRadius: "5px",
                }}
              >
                HeadPhone
              </button>
            </div>
          </Col>
          {products ? (
            products.map((item, i) => (
              <Col className="mb-3" key={i} lg="3" md="4" sm="6" xs="12">
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

export default Categorys;
