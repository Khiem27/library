import React from "react";
import AddProducts from "../../Components/AddProducts/AddProducts";
import Header from "../../Components/Header/Header";

AddProductsLayout.propTypes = {};

function AddProductsLayout(props) {
  return (
    <body id="contact-us" className="template-page ">
      <div className="wrapper">
        <Header />
        <AddProducts />
      </div>
    </body>
  );
}

export default AddProductsLayout;
