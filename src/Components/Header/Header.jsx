import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../CSS/style.css";
import "../../CSS/theme-custom.css";
import "../../CSS/timber.scss.css";
import "../../CSS/vendors.css";
Header.propTypes = {};

function Header(props) {
  const [valueActiveAccount, setValueActiveAccount] = useState(false);
  const activeAccount = () => {
    setValueActiveAccount(!valueActiveAccount);
  };

  const [valueActiveCartMini, setValueActiveCartMini] = useState(false);
  const activeCartMini = () => {
    setValueActiveCartMini(!valueActiveCartMini);
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
                        <Link to="/collections/all">Shop</Link>

                        <ul className="common-class jekono_nam mega-menu four-column">
                          <li className="mega-menu-add-class">
                            <Link to="#" className="mega-title">
                              Book Type
                            </Link>
                            <ul>
                              <li>
                                <Link to="/products/1-new-and-sale-badge-product">
                                  Science
                                </Link>
                              </li>

                              <li>
                                <Link to="/products/11-product-with-video">
                                  Humanities
                                </Link>
                              </li>

                              <li>
                                <Link to="/products/8-countdown-product">
                                  Commerce
                                </Link>
                              </li>

                              <li>
                                <Link to="/products/11-product-with-video">
                                  Adventure
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="mega-menu-add-class">
                            <Link to="#" className="mega-title">
                              Author
                            </Link>
                            <ul>
                              <li>
                                <Link to="#">Micle Jac</Link>
                              </li>

                              <li>
                                <Link to="#">Roben Joo</Link>
                              </li>

                              <li>
                                <Link to="#">Shila Mona</Link>
                              </li>

                              <li>
                                <Link to="#">Robon Sen</Link>
                              </li>
                            </ul>
                          </li>

                          <li className="mega-menu-add-class">
                            <Link to="#" className="mega-title">
                              Publisher
                            </Link>
                            <ul>
                              <li>
                                <Link to="#">Meen Con</Link>
                              </li>

                              <li>
                                <Link to="#">Chung Gon</Link>
                              </li>

                              <li>
                                <Link to="#">Lom Mess</Link>
                              </li>

                              <li>
                                <Link to="#">Henry Sons</Link>
                              </li>
                            </ul>
                          </li>

                          <li className="mega-menu-add-class">
                            <Link to="#" className="mega-title">
                              Bestseller
                            </Link>
                            <ul>
                              <li>
                                <Link to="/products/12-unique-content-for-each-product-on-the-product-tab">
                                  Samsdi Robn Lonk
                                </Link>
                              </li>

                              <li>
                                <Link to="/products/7-sample-affiliate-product">
                                  Monli Kosdn Stons
                                </Link>
                              </li>

                              <li>
                                <Link to="/products/3-variable-product">
                                  Bolni Jons Top
                                </Link>
                              </li>

                              <li>
                                <Link to="/products/5-simple-product">
                                  Aisdo Dink Skjos
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="megamenu-banner d-none d-lg-block mt-30 w-100">
                            <Link className="mb-0" to="/collections/frontpage">
                              <img
                                src="https://cdn.shopify.com/s/files/1/0265/8933/1530/collections/Banner.png?v=1569660585"
                                alt="Mega menu Banner"
                                className="img-fluid"
                              />
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link to="/blogs/news">Blog</Link>
                      </li>

                      <li>
                        <Link to="/pages/about-us">About</Link>
                      </li>

                      <li>
                        <Link to="/pages/contact-us">Contact</Link>
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
                            <div className="single-cart-item">
                              <Link className="remove-icon" to="#">
                                <i className="fa-solid fa-xmark"></i>
                              </Link>

                              <div className="image">
                                <Link to="/products/8-countdown-product?variant=29444795662410">
                                  <img
                                    src="https://cdn.shopify.com/s/files/1/0265/8933/1530/products/11_e272e529-4c81-454b-b9ff-99dcfba814f1_small.jpg?v=1569231225"
                                    alt=""
                                  />
                                </Link>
                              </div>
                              <div className="content">
                                <p className="product-title">
                                  <Link to="/products/8-countdown-product?variant=29444795662410">
                                    8. Countdown product - red
                                  </Link>
                                </p>

                                <p className="cart-quantity">
                                  <span>1 x </span>{" "}
                                  <span
                                    className="money"
                                    data-currency-usd="$39.00"
                                  >
                                    $39.00
                                  </span>
                                </p>
                              </div>
                            </div>

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
                                      $39.00
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
                                      $39.00
                                    </span>{" "}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="cart-buttons single-product-cart">
                            <Link to="/cart">View Cart</Link>
                            <Link to="/checkout">Checkout</Link>
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
