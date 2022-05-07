import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../CSS/style.css";
import "../../CSS/theme-custom.css";
import "../../CSS/timber.scss.css";
import "../../CSS/vendors.css";
import { DeleteProductCart } from "../Products/ProductsSlide";

Header.propTypes = {};

function Header(props) {
  const valueCart = useRef([]);
  const dispatch = useDispatch();

  const localProductsData = localStorage.getItem("Products");
  const localCartData = localStorage.getItem("cart");
  const localAllTotalPriceData = localStorage.getItem("AllTotalPrice");
  const [cartData, setCartData] = useState([]);
  const [AllTotalPriceData, setAllTotalPriceData] = useState([]);

  useEffect(() => {
    const dataCartParse = JSON.parse(localCartData);
    const dataAllTotalPriceParse = JSON.parse(localAllTotalPriceData);
    setAllTotalPriceData(dataAllTotalPriceParse);
    setCartData(dataCartParse);
    valueCart.current = dataCartParse;
    if (valueCart.current) {
      let allTotalPrice = valueCart.current.reduce(
        (ack, item) => ack + item[1].totalPrice,
        0
      );
      localStorage.setItem("AllTotalPrice", JSON.stringify(allTotalPrice));
    }
  }, [localProductsData, localCartData, localAllTotalPriceData]);
  const [valueActiveAccount, setValueActiveAccount] = useState(false);
  const activeAccount = () => {
    setValueActiveAccount(!valueActiveAccount);
  };

  const [valueActiveCartMini, setValueActiveCartMini] = useState(false);
  const activeCartMini = () => {
    setValueActiveCartMini(!valueActiveCartMini);
  };

  const handleDeleteProductCart = (item) => {
    const action = DeleteProductCart(item);
    dispatch(action);
  };
  return (
    <div id="shopify-section-header" className="shopify-section">
      <div className="header-area header-sticky header-common-class">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-wrapper d-none d-lg-flex">
                <div className="logo">
                  <Link to="/" className="theme-logo">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0265/8933/1530/files/Logo_057b3bc4-c82c-4a1d-8aec-fc99c1e4b647_100x.png?v=1569320536"
                      alt="Susan Demo"
                    />
                  </Link>
                </div>
                <div className="navigation-menu-wrapper">
                  <nav>
                    <ul>
                      <li className="menu-item-has-children">
                        <Link to="/">Home</Link>
                      </li>

                      <li className="menu-item-has-children mega_static">
                        <Link to="/cart">Shopping Cart</Link>
                      </li>

                      <li>
                        <Link to="/pages/contact-us">Post A Book</Link>
                      </li>

                      <li>
                        <Link to="/pages/about-us">Checkout</Link>
                      </li>

                      <li>
                        <Link to="/account/login">Login</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-icon-wrapper">
                  <ul className="icon-list">
                    <li>
                      <Link to="#" id="search-overlay-trigger">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </Link>
                    </li>
                    <li>
                      <div className="header-cart-icon">
                        <Link
                          to="#"
                          id="minicart-trigger"
                          onClick={activeCartMini}
                        >
                          <i className="fa-solid fa-cart-shopping"></i>
                          <span className="counter bigcounter">1</span>
                        </Link>

                        <div
                          className={
                            valueActiveCartMini
                              ? "mini-cart active"
                              : "mini-cart "
                          }
                          id="mini-cart"
                        >
                          <div className="cart-empty-title">
                            <h3>Your cart is currently empty.</h3>
                          </div>

                          <div className="cart-items-wrapper ps-scroll single-product-cart single-cart-item-loop ps">
                            {cartData &&
                              cartData.map((item, index) => {
                                return (
                                  <div className="single-cart-item" key={index}>
                                    <Link
                                      onClick={() =>
                                        handleDeleteProductCart(item)
                                      }
                                      className="remove-icon"
                                      to="#"
                                    >
                                      <i className="fa-solid fa-xmark"></i>
                                    </Link>

                                    <div className="image">
                                      <Link to="/products/8-countdown-product?variant=29444795662410">
                                        <img src={item[2][0]} alt="" />
                                      </Link>
                                    </div>

                                    <div className="content">
                                      <p className="product-title">
                                        <Link to="/products/8-countdown-product?variant=29444795662410">
                                          {item[0].bookName}
                                        </Link>
                                      </p>

                                      <p className="cart-quantity">
                                        <span>{item[1].quantity} x </span>{" "}
                                        <span className="money">
                                          ${item[0].bookPrice}
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                );
                              })}

                            <div
                              className="ps__rail-x"
                              style={{ left: "0px", bottom: "0px" }}
                            >
                              <div
                                className="ps__thumb-x"
                                tabIndex="0"
                                style={{ left: "0px", width: "0px" }}
                              ></div>
                            </div>
                            <div
                              className="ps__rail-y"
                              style={{ top: "0px", right: "0px" }}
                            >
                              <div
                                className="ps__thumb-y"
                                tabIndex="0"
                                style={{ top: "0px", height: "0px" }}
                              ></div>
                            </div>
                          </div>

                          <div className="cart-calculation single-product-cart">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td className="text-left">Sub Total :</td>
                                  <td className="text-right shopping-cart__total">
                                    <span
                                      className="money"
                                      data-currency-usd="$39.00"
                                    >
                                      ${AllTotalPriceData}
                                    </span>
                                  </td>
                                </tr>

                                <tr>
                                  <td className="text-left">Total :</td>
                                  <td className="text-right shopping-cart__total">
                                    <span
                                      className="money"
                                      data-currency-usd="$39.00"
                                    >
                                      ${AllTotalPriceData}
                                    </span>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="cart-buttons single-product-cart">
                            <Link to="/cart">View Cart</Link>
                            <Link to="/pages/about-us">Checkout</Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="header-settings-icon">
                        <Link
                          to="#"
                          className="header-settings-trigger"
                          id="header-settings-trigger"
                          onClick={activeAccount}
                        >
                          <div className="setting-button">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </Link>

                        <div
                          className={
                            valueActiveAccount
                              ? "settings-menu-wrapper active"
                              : "settings-menu-wrapper "
                          }
                          id="settings-menu-wrapper"
                        >
                          <div className="single-settings-block">
                            <h4 className="title">MY ACCOUNT </h4>
                            <ul>
                              <li>
                                <Link
                                  to="/account/login"
                                  id="customer_login_link"
                                >
                                  Log in
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/account/register"
                                  id="customer_register_link"
                                >
                                  Create account
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
