/* eslint-disable react/prop-types */
import { Dialog, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../RTK/CartSlice";
import { favoriteAction } from "../../RTK/FavoriteSlice";
import { toast } from "react-toastify";
import React from "react";
import Productdetails from "../../components/Productdetails/Productdetails";
import { motion } from "framer-motion";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const { user } = useUser();
  const navigate = useNavigate();
  const addToCart = () => {
    if (user) {
      dispatch(
        cartAction.addItemToCart({
          id: item.id,
          title: item.attributes.title,
          price: item.attributes.price,
          image: item.attributes.image.data.attributes.url,
          description: item.attributes.description,
          rating: item.attributes.rating,
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
  const addToFavorite = () => {
    dispatch(
      favoriteAction.addItemToCart({
        id: item.id,
        title: item.attributes.title,
        price: item.attributes.price,
        image: item.attributes.image.data.attributes.url,
        description: item.attributes.description,
        rating: item.attributes.rating,
      })
    );
    toast.success("Added to favorite", {
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

  // @ts-ignore
  const findItem = useSelector((state) => state.favorite).find(
    (product) => product.id === item.id
  );
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    if (user) {
      setOpen(true);
    } else {
      navigate("/signin");
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <motion.div
      initial={{ scale: 0.7 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
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
          src={item.attributes.image.data.attributes.url}
          alt="sorry"
        />
      </div>
      <div className="product-content">
        <Rating
          name="text-feedback"
          // eslint-disable-next-line react/prop-types
          value={item.attributes.rating}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <h4 onClick={handleClickOpen} style={{ cursor: "pointer" }}>
          {item.attributes.title}
        </h4>
        <div className="w-100 d-flex justify-content-between">
          <h5 style={{ color: "#0d6efd" }}>
            {item.attributes.price}
            <span>$</span>{" "}
          </h5>
          <div onClick={addToFavorite} style={{ cursor: "pointer" }}>
            {findItem ? <FavoriteRoundedIcon /> : <FavoriteBorderIcon />}
          </div>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center my-2 ">
        <Button
          onClick={addToCart}
          style={{ transition: "0.4s", margin: "10px 0" }}
          className="w-100"
        >
          Add To Cart
        </Button>
      </div>

      <Dialog
        sx={{
          ".MuiPaper-root": { minWidth: { xs: "90%", md: 800 } },
        }}
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div
          style={{
            textAlign: "right",
            padding: "10px",
          }}
        >
          <span
            // @ts-ignore
            onClick={handleClose}
            style={{
              backgroundColor: "#2893ff",
              color: "white",
              padding: "5px 10px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            X
          </span>
        </div>
        <Productdetails item={item} />
      </Dialog>
    </motion.div>
  );
};

export default ProductCard;
