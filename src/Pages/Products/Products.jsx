import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import Banar from "../../UI/Banar/Banar";
import { useState } from "react";
import { useGetproductByNameQuery } from "../../RTK/ProductSlice";
import ProductCard from "../../UI/Product Card/ProductCard";
import SkeletonCom from "../../components/skeleton/SkeletonCom";

const Products = () => {
  const [search, setSearch] = useState("");
  const { data } = useGetproductByNameQuery("products?populate=*");

  return (
    <div style={{ paddingTop: "50px" }}>
      <Banar title={"All Products"} />
      <Container>
        <div className="w-100 d-flex justify-content-center my-4">
          <Form className="w-75">
            <FormGroup>
              <Form.Label htmlFor="search">Search</Form.Label>
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                id="search"
                placeholder="Search by name"
              />
            </FormGroup>
          </Form>
        </div>
        <Row>
          {data ? (
            data.data
              .filter((item) => {
                if (search == "") {
                  return item;
                }
                if (
                  item.attributes.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item, i) => (
                <Col key={i} className="my-3" lg="3" md="4" sm="6" xs="12">
                  <ProductCard item={item} />
                </Col>
              ))
          ) : (
            <SkeletonCom />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
