import React from "react";
import Header from "../../Components/Header/Header";
import ListCustomer from "../../Components/ListCustomer/ListCustomer";

ListCustomerLayout.propTypes = {};

function ListCustomerLayout(props) {
  return (
    <body id="your-shopping-cart" className="template-cart ">
      <div className="wrapper">
        <div id="shopify-section-header" className="shopify-section">
          <Header />
          <ListCustomer />
        </div>
      </div>
    </body>
  );
}

export default ListCustomerLayout;
