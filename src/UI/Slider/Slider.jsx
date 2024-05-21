import Slider from "react-slick";
import { useGetproductByNameQuery } from "../../RTK/ProductSlice";
import { Container } from "react-bootstrap";

const SliderCom = () => {
  const { data } = useGetproductByNameQuery("products?populate=*");
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: true,
  };
  return (
    <section style={{ padding: "30px 0" }}>
      <Container>
        <div className="slider-container px-3 w-100">
          <h2 className="mb-4">A look at the future</h2>
          <Slider {...settings}>
            {data &&
              data.data.map((item) => (
                <div className="d-flex justify-content-center" key={item.id}>
                  <img
                    className="w-75"
                    src={item.attributes.image.data.attributes.url}
                    alt="item"
                  />
                </div>
              ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default SliderCom;
