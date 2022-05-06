import React from "react";

ShoppingCart.propTypes = {};

function ShoppingCart(props) {
  return (
    <main>
      <div
        id="shopify-section-template--14336701595722__main"
        class="shopify-section"
      >
        <div class="cart-page theme-default-margin">
          <div class="container">
            <form action="/cart" method="post" novalidate="" class="cart">
              <div class="row">
                <div class="col-lg-12 col-12">
                  <div class="cart-table table-responsive mb-40">
                    <table>
                      <thead>
                        <tr>
                          <th class="pro-thumbnail">Image</th>
                          <th class="pro-title">Product</th>
                          <th class="pro-price">Price</th>
                          <th class="pro-quantity">Quantity</th>
                          <th class="pro-subtotal">Total</th>
                          <th class="pro-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="pro-thumbnail">
                            <a href="/products/8-countdown-product?variant=29444795662410">
                              <img
                                src="//cdn.shopify.com/s/files/1/0265/8933/1530/products/11_e272e529-4c81-454b-b9ff-99dcfba814f1_compact.jpg?v=1569231225"
                                alt="8. Countdown product - red"
                              />
                            </a>
                          </td>
                          <td class="pro-title">
                            <a href="/products/8-countdown-product?variant=29444795662410">
                              8. Countdown product
                            </a>
                          </td>
                          <td class="pro-price">
                            <span class="amount">
                              <span class="money" data-currency-usd="$39.00">
                                $39.00
                              </span>
                            </span>
                          </td>
                          <td class="pro-quantity">
                            <div class="product-quantity">
                              <input type="text" value="1" name="updates[]" />
                              <span class="dec qtybtn"> (-) </span>
                              <span class="inc qtybtn"> (+) </span>
                            </div>
                          </td>
                          <td class="pro-subtotal">
                            <span class="money" data-currency-usd="$39.00">
                              $39.00
                            </span>
                          </td>
                          <td class="pro-remove">
                            <a href="/cart/change?line=1&amp;quantity=0">×</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="col-lg-12 col-12">
                  <div class="cart-payment">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="cart-total">
                          <h3>Cart Totals</h3>
                          <table>
                            <tbody>
                              <tr class="cart-subtotal">
                                <th>Subtotal</th>
                                <td>
                                  <span class="amount">
                                    <span id="bk-cart-subtotal-price">
                                      <span
                                        class="money"
                                        data-currency-usd="$39.00"
                                      >
                                        $39.00
                                      </span>
                                    </span>
                                  </span>
                                </td>
                              </tr>
                              <tr class="order-total">
                                <th>Total</th>
                                <td>
                                  <strong>
                                    <span class="amount">
                                      <span id="bk-cart-subtotal-price">
                                        <span
                                          class="money"
                                          data-currency-usd="$39.00"
                                        >
                                          $39.00
                                        </span>
                                      </span>
                                    </span>
                                  </strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div class="proceed-to-checkout">
                            <button
                              type="submit"
                              class="theme-default-button"
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
