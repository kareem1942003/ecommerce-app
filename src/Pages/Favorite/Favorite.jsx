import { useSelector } from "react-redux";
import Banar from "../../UI/Banar/Banar";
import { Col, Container, Row } from "react-bootstrap";
import ProductsFavorite from "../../UI/ProductFavoriteCard/ProductsFavorite";

const Favorite = () => {
  // @ts-ignore
  const productInFavorite = useSelector((sata) => sata.favorite);
  return (
    <section style={{ paddingTop: "50px" }}>
      <Banar title={"Favorite"} />
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="pb-5 pt-3">Your Favorite Products</h4>
          </Col>
          {productInFavorite.length ? (
            productInFavorite.map((item, i) => (
              <Col className="mb-3" key={i} lg="3" md="6" sm="6" xs="12">
                <ProductsFavorite item={item} />
              </Col>
            ))
          ) : (
            <h5 className="text-center mb-5">You dont have any favourites</h5>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Favorite;
