import React from "react";
import Header from "../../Components/Header/Header";
import ShoppingCart from "../../Components/ShoppingCart/ShoppingCart";
import "../../CSS/theme-default.css";
ShoppingCartLayout.propTypes = {};

function ShoppingCartLayout(props) {
  return (
    <body id="your-shopping-cart" class="template-cart ">
      <div class="wrapper">
        <div id="shopify-section-header" class="shopify-section">
          <Header />
          <ShoppingCart />
        </div>
      </div>
    </body>
  );
}

export default ShoppingCartLayout;
