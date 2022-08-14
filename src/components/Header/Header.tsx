import React from "react";
import * as S from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Map } from "../../assets/Map.svg";
import { ReactComponent as Cart } from "../../assets/Cart.svg";
import { useCart } from "../../context";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  let cartCount = cart.length;

  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateBackHome = () => {
    navigate("/");
  };

  return (
    <S.Header>
      <div className="container header_container">
        <Logo
          className="logo"
          aria-label="Coffee Logo"
          onClick={navigateBackHome}
        />

        <div className="flex-center">
          <S.Location>
            <Map />
            <span>Samonte, MG</span>
          </S.Location>
          <S.Cart aria-label="carrinho" onClick={navigateToCart}>
            <Cart />
            <span>{cartCount}</span>
          </S.Cart>
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
