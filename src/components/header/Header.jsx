import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartUI } from "../../RTK/CartUi";
import { UserButton, useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useEffect } from "react";
// @ts-ignore
import logo from "../../../public/logoipsum-296.svg";
// import { useEffect } from "react";

const Header = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nav_links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Category",
      path: "/category",
    },
    {
      title: "Cart",
      path: "/cart",
    },
    {
      title: "Contact Us",
      path: "/contact-us",
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href]);
  // @ts-ignore
  const cart = useSelector((state) => state.cart.cartItems);
  // @ts-ignore
  const favorite = useSelector((state) => state.favorite);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useUser();
  const [islogedIn, setIslogedin] = useState(false);
  useEffect(() => {
    setIslogedin(window.location.href.toString().includes("signin"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href]);
  return (
    !islogedIn && (
      <div
        style={{
          position: "fixed",
          marginBottom: "50px",
          width: "100%",
          zIndex: "1",
        }}
      >
        <Navbar expand="lg" className="bg-body-tertiary fixed">
          <Container>
            <Link
              style={{ textDecoration: "none", marginRight: "30px" }}
              to={"/"}
            >
              {" "}
              <img width={30} src={logo} alt="sorry" />{" "}
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="d-flex gap-3 me-auto">
                {nav_links.map((item, i) => (
                  <NavLink
                    className={(navClass) =>
                      navClass.isActive ? "text-primary fw-bold" : "nav_menu"
                    }
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "#000",
                      fontWeight: "400",
                      marginBottom: "10px",
                    }}
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </Nav>
              <Nav className="icons d-flex gap-3">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/favorite")}
                >
                  <Badge badgeContent={favorite.length} color="secondary">
                    <FavoriteBorderRoundedIcon />
                  </Badge>
                </div>
                <div
                  onClick={() => {
                    dispatch(
                      // @ts-ignore
                      toggleCartUI()
                    );
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Badge badgeContent={cart.length} color="primary">
                    <ShoppingCartRoundedIcon />
                  </Badge>
                </div>
              </Nav>
              <Nav className="ml-3">
                <header>
                  {user ? (
                    <UserButton afterSignOutUrl="/" />
                  ) : (
                    <Button
                      onClick={() => navigate("/signin")}
                      size="sm"
                      style={{ transition: "0.3s" }}
                    >
                      SignIn
                    </Button>
                  )}
                </header>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  );
};

export default Header;
