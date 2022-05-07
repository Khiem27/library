import React, { useEffect, useState } from "react";

ListCustomer.propTypes = {};

function ListCustomer(props) {
  const localCartData = localStorage.getItem("register");
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const dataCartParse = JSON.parse(localCartData);
    setCartData(dataCartParse);
  }, [localCartData]);
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
                          <th className="pro-title">Email</th>
                          <th className="pro-price">First Name</th>
                          <th className="pro-subtotal">Last Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartData &&
                          cartData.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td className="pro-title">
                                  <a href="/products/8-countdown-product?variant=29444795662410">
                                    {item.Email}
                                  </a>
                                </td>
                                <td className="pro-price">
                                  <span className="amount">
                                    <span
                                      className="money"
                                      data-currency-usd="39.00"
                                    >
                                      {item.FirstName}
                                    </span>
                                  </span>
                                </td>

                                <td className="pro-subtotal">
                                  <span
                                    className="money"
                                    data-currency-usd="39.00"
                                  >
                                    {item.LastName}
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
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

export default ListCustomer;
