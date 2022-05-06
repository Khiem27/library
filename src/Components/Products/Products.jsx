import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
Products.propTypes = {};

function Products(props) {
  const valueProducts = useRef([]);
  const valueCart = useRef([]);
  const [Products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);

  const localProductsData = localStorage.getItem("Products");
  const localCartData = localStorage.getItem("cart");

  useEffect(() => {
    const dataParse = JSON.parse(localProductsData);
    const dataCartParse = JSON.parse(localCartData);
    valueProducts.current = dataParse;
    valueCart.current = dataCartParse;
    setProducts(valueProducts.current);
    setCartData(dataCartParse);
  }, [localProductsData, localCartData]);
  const handleAddToCart = (item) => {
    const valueFindIndex = cartData.findIndex((data) => {
      return data[0].bookName === item[0].bookName;
    });
    if (valueFindIndex < 0) {
      const arr = valueCart.current;
      arr.push(item);
    } else {
      const arr = valueCart.current;
      arr[valueFindIndex][1].quantity = arr[valueFindIndex][1].quantity + 1;
      arr[valueFindIndex][1].totalPrice =
        arr[valueFindIndex][1].quantity * arr[valueFindIndex][0].bookPrice;
    }
    let allTotalPrice = valueCart.current.reduce(
      (ack, item) => ack + item[1].totalPrice,
      0
    );
    localStorage.setItem("AllTotalPrice", JSON.stringify(allTotalPrice));

    localStorage.setItem("cart", JSON.stringify(valueCart.current));
  };
  return (
    <>
      {Products &&
        Products.map((item, index) => {
          return (
            <div key={index} className="col-lg-3 col-md-4 col-12">
              <div className="single-grid-product grid-view-product 29444811685962">
                <div className="single-grid-product__image">
                  <div className="single-grid-product__label"></div>

                  <Link to="/products/dummy-product-name-4">
                    <img
                      className="img-fluid popup_cart_image"
                      alt=""
                      src={item[2][0]}
                    />

                    <img
                      className="img-fluid popup_cart_image"
                      alt=""
                      src={item[2][1]}
                    />
                  </Link>

                  <div className="hover-icons">
                    <Link to="#" onClick={() => handleAddToCart(item)}>
                      <span>
                        <span className="cart-title">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </span>
                      </span>
                    </Link>

                    <p to="#">Add Cart</p>
                  </div>
                </div>

                <div className="single-grid-product__content">
                  <div className="single-grid-product__category-rating"></div>

                  <h3 className="single-grid-product__title popup_cart_title">
                    {" "}
                    <Link to="/products/dummy-product-name-4">
                      {item[0].bookName}
                    </Link>{" "}
                  </h3>

                  <p className="single-grid-product__price">
                    <span className="discounted-price">
                      <span className="money" data-currency-usd="$79.00">
                        {item[0].bookPrice}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default Products;
