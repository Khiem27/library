import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AddToCart } from "./ProductsSlide";
Products.propTypes = {};

function Products(props) {
  const dispatch = useDispatch();
  const [Products, setProducts] = useState([]);

  const localProductsData = localStorage.getItem("Products");

  useEffect(() => {
    const dataParse = JSON.parse(localProductsData);
    setProducts(dataParse);
  }, [localProductsData]);

  const handleAddToCart = (item) => {
    const action = AddToCart(item);
    dispatch(action);
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
