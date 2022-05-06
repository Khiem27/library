import React from "react";
import AddProducts from "../../Components/AddProducts/AddProducts";
import Header from "../../Components/Header/Header";

AddProductsLayout.propTypes = {};

function AddProductsLayout(props) {
  return (
    <body id="contact-us" class="template-page ">
      <div class="wrapper">
        <Header />
        <AddProducts />
      </div>
    </body>
  );
}

export default AddProductsLayout;
