import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
ShoppingCart.propTypes = {};

function ShoppingCart(props) {
  const valueCart = useRef([]);

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
    let allTotalPrice = valueCart.current.reduce(
      (ack, item) => ack + item[1].totalPrice,
      0
    );
    localStorage.setItem("AllTotalPrice", JSON.stringify(allTotalPrice));
  }, [localProductsData, localCartData, localAllTotalPriceData]);

  const handleDeleteProductCart = (item) => {
    const newArr = cartData.filter((data) => data !== item);
    localStorage.setItem("cart", JSON.stringify(newArr));
    let allTotalPrice = valueCart.current.reduce(
      (ack, item) => ack + item[1].totalPrice,
      0
    );
    localStorage.setItem("AllTotalPrice", JSON.stringify(allTotalPrice));
  };

  const handleDecrease = (item) => {
    const valueFindIndex = cartData.findIndex((data) => {
      return data[0].bookName === item[0].bookName;
    });

    const arr = valueCart.current;
    arr[valueFindIndex][1].quantity = arr[valueFindIndex][1].quantity - 1;
    arr[valueFindIndex][1].totalPrice =
      arr[valueFindIndex][1].quantity * arr[valueFindIndex][0].bookPrice;
    localStorage.setItem("cart", JSON.stringify(valueCart.current));
    let allTotalPrice = valueCart.current.reduce(
      (ack, item) => ack + item[1].totalPrice,
      0
    );
    localStorage.setItem("AllTotalPrice", JSON.stringify(allTotalPrice));
    window.location.reload();
  };

  const handleIncrease = (item) => {
    const valueFindIndex = cartData.findIndex((data) => {
      return data[0].bookName === item[0].bookName;
    });

    const arr = valueCart.current;
    arr[valueFindIndex][1].quantity = arr[valueFindIndex][1].quantity + 1;
    arr[valueFindIndex][1].totalPrice =
      arr[valueFindIndex][1].quantity * arr[valueFindIndex][0].bookPrice;
    localStorage.setItem("cart", JSON.stringify(valueCart.current));
    let allTotalPrice = valueCart.current.reduce(
      (ack, item) => ack + item[1].totalPrice,
      0
    );
    localStorage.setItem("AllTotalPrice", JSON.stringify(allTotalPrice));
    window.location.reload();
  };

  return (
    <main>
      <div
        id="shopify-section-template--14336701595722__main"
        className="shopify-section"
      >
        <div className="cart-page theme-default-margin">
          <div className="container">
            <form action="/cart" method="post" novalidate="" className="cart">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <div className="cart-table table-responsive mb-40">
                    <table>
                      <thead>
                        <tr>
                          <th className="pro-thumbnail">Image</th>
                          <th className="pro-title">Product</th>
                          <th className="pro-price">Price</th>
                          <th className="pro-quantity">Quantity</th>
                          <th className="pro-subtotal">Total</th>
                          <th className="pro-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartData &&
                          cartData.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td className="pro-thumbnail">
                                  <a href="/products/8-countdown-product?variant=29444795662410">
                                    <img
                                      src="//cdn.shopify.com/s/files/1/0265/8933/1530/products/11_e272e529-4c81-454b-b9ff-99dcfba814f1_compact.jpg?v=1569231225"
                                      alt="8. Countdown product - red"
                                    />
                                  </a>
                                </td>
                                <td className="pro-title">
                                  <a href="/products/8-countdown-product?variant=29444795662410">
                                    {item[0].bookName}
                                  </a>
                                </td>
                                <td className="pro-price">
                                  <span className="amount">
                                    <span
                                      className="money"
                                      data-currency-usd="$39.00"
                                    >
                                      ${item[0].bookPrice}
                                    </span>
                                  </span>
                                </td>
                                <td className="pro-quantity">
                                  <div className="product-quantity">
                                    <input
                                      type="text"
                                      value={item[1].quantity}
                                      name="updates[]"
                                    />
                                    <span
                                      onClick={() => handleDecrease(item)}
                                      className="dec qtybtn"
                                    >
                                      {" "}
                                      (-){" "}
                                    </span>
                                    <span
                                      onClick={() => handleIncrease(item)}
                                      className="inc qtybtn"
                                    >
                                      {" "}
                                      (+){" "}
                                    </span>
                                  </div>
                                </td>
                                <td className="pro-subtotal">
                                  <span
                                    className="money"
                                    data-currency-usd="$39.00"
                                  >
                                    ${item[1].totalPrice}
                                  </span>
                                </td>
                                <td className="pro-remove">
                                  <Link
                                    onClick={() =>
                                      handleDeleteProductCart(item)
                                    }
                                    to="#"
                                  >
                                    ×
                                  </Link>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="col-lg-12 col-12">
                  <div className="cart-payment">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="cart-total">
                          <h3>Cart Totals</h3>
                          <table>
                            <tbody>
                              <tr className="cart-subtotal">
                                <th>Subtotal</th>
                                <td>
                                  <span className="amount">
                                    <span id="bk-cart-subtotal-price">
                                      <span
                                        className="money"
                                        data-currency-usd="$39.00"
                                      >
                                        ${AllTotalPriceData}
                                      </span>
                                    </span>
                                  </span>
                                </td>
                              </tr>
                              <tr className="order-total">
                                <th>Total</th>
                                <td>
                                  <strong>
                                    <span className="amount">
                                      <span id="bk-cart-subtotal-price">
                                        <span className="money">
                                          ${AllTotalPriceData}
                                        </span>
                                      </span>
                                    </span>
                                  </strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="proceed-to-checkout">
                            <button
                              type="submit"
                              className="theme-default-button"
                              name="checkout"
                            >
                              Proceed to Checkout
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ShoppingCart;
