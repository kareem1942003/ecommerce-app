/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { favoriteAction } from "../../RTK/FavoriteSlice";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { cartAction } from "../../RTK/CartSlice";
import { toast } from "react-toastify";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const ProductsFavorite = ({ item }) => {
  const dispatch = useDispatch();
  const { user } = useUser();
  const navigate = useNavigate();
  const deleteToFavorite = () => {
    dispatch(favoriteAction.deleteItemFromCart(item.id));
    toast.warn("You have deleted from favorite", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const addToCart = () => {
    if (user) {
      dispatch(
        cartAction.addItemToCart({
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
          description: item.description,
          rating: item.rating,
        })
      );
      toast.success("Successfully added to shopping cart", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      navigate("/signin");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 0  15px #a0cfff",
        padding: "20px",
        borderRadius: "5px",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="product-image d-flex justify-content-center">
        <img
          className="product-imag w-50"
          // eslint-disable-next-line react/prop-types
          src={item.image}
          alt="sorry"
        />
      </div>
      <div className="product-content">
        <Rating
          name="text-feedback"
          // eslint-disable-next-line react/prop-types
          value={item.rating}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <h4 style={{ cursor: "pointer" }}>{item.title}</h4>
        <div className="w-100 d-flex justify-content-between">
          <h5 style={{ color: "#0d6efd" }}>
            {item.price}
            <span>$</span>{" "}
          </h5>
          <div onClick={deleteToFavorite} style={{ cursor: "pointer" }}>
            <FavoriteRoundedIcon />
          </div>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center my-2 ">
        <Button
          onClick={addToCart}
          style={{ transition: "0.4s", margin: "10px 0" }}
          className="w-100"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductsFavorite;
