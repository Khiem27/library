import React from "react";
import Header from "../../Components/Header/Header";
import ShoppingCart from "../../Components/ShoppingCart/ShoppingCart";
import "../../CSS/theme-default.css";
ShoppingCartLayout.propTypes = {};

function ShoppingCartLayout(props) {
  return (
    <body id="your-shopping-cart" className="template-cart ">
      <div className="wrapper">
        <div id="shopify-section-header" className="shopify-section">
          <Header />
          <ShoppingCart />
        </div>
      </div>
    </body>
  );
}

export default ShoppingCartLayout;
