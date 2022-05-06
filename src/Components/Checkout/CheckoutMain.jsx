/* eslint-disable jsx-a11y/no-redundant-roles */
import { PDFExport } from "@progress/kendo-react-pdf";
import React, { useEffect, useRef, useState } from "react";
import "../../CSS/v2-ltr-edge-31d12fab8028ad9fd32b5cc20b65a2d6-1545.css";
CheckoutMain.propTypes = {};

function CheckoutMain(props) {
  const localCartData = localStorage.getItem("cart");
  const localAllTotalPriceData = localStorage.getItem("AllTotalPrice");
  const [cartData, setCartData] = useState([]);
  const [AllTotalPriceData, setAllTotalPriceData] = useState([]);
  const pdfExport = useRef(null);
  useEffect(() => {
    const dataCartParse = JSON.parse(localCartData);
    const dataAllTotalPriceParse = JSON.parse(localAllTotalPriceData);
    setCartData(dataCartParse);
    setAllTotalPriceData(dataAllTotalPriceParse);
  }, [localCartData, localAllTotalPriceData]);
  const handleClick = () => {
    pdfExport.current.save();
  };
  return (
    <PDFExport ref={pdfExport} paperSize="auto" margin={40}>
      <div class="content" data-content="">
        <div class="wrap">
          <div class="main">
            <header class="main__header" role="banner">
              <a
                class="logo logo--left"
                href="https://susan-demo.myshopify.com/"
              >
                <span class="logo__text heading-1">Susan Demo</span>
              </a>

              <h1 class="visually-hidden">Information</h1>

              <nav aria-label="Breadcrumb">
                <ol class="breadcrumb " role="list">
                  <li class="breadcrumb__item breadcrumb__item--completed">
                    <a
                      class="breadcrumb__link"
                      href="https://susan-demo.myshopify.com/cart"
                    >
                      Cart
                    </a>
                    <svg
                      class="icon-svg icon-svg--color-adaptive-light icon-svg--size-10 breadcrumb__chevron-icon"
                      aria-hidden="true"
                      focusable="false"
                    >
                      {" "}
                    </svg>
                  </li>

                  <li
                    class="breadcrumb__item breadcrumb__item--current"
                    aria-current="step"
                  >
                    <span class="breadcrumb__text">Information</span>
                    <svg
                      class="icon-svg icon-svg--color-adaptive-light icon-svg--size-10 breadcrumb__chevron-icon"
                      aria-hidden="true"
                      focusable="false"
                    >
                      {" "}
                    </svg>
                  </li>
                </ol>
              </nav>

              <div class="shown-if-js" data-alternative-payments=""></div>
            </header>
            <main class="main__content" role="main">
              <div
                class="step"
                data-step="contact_information"
                data-last-step="false"
              >
                <form
                  data-customer-information-form="true"
                  data-email-or-phone="true"
                  class="edit_checkout animate-floating-labels"
                  novalidate="novalidate"
                  action="#"
                  accept-charset="UTF-8"
                >
                  <div class="step__sections">
                    <div class="section section--contact-information">
                      <div class="section__header">
                        <div class="layout-flex layout-flex--tight-vertical layout-flex--loose-horizontal layout-flex--wrap">
                          <h2
                            class="section__title layout-flex__item layout-flex__item--stretch"
                            id="main-header"
                            tabindex="-1"
                            style={{ textAlign: "left" }}
                          >
                            Contact information
                          </h2>
                        </div>
                      </div>
                      <div
                        class="section__content"
                        data-section="customer-information"
                        data-shopify-pay-validate-on-load="false"
                      >
                        <div class="fieldset">
                          <div
                            data-email-or-phone-input-wrapper="true"
                            data-shopify-pay-email-flow="false"
                            class="field field--email_or_phone field--show-floating-label"
                          >
                            <div class="field__input-wrapper">
                              <label
                                class="field__label field__label--visible"
                                for="checkout_email_or_phone"
                              >
                                Email or mobile phone number
                              </label>
                              <input
                                placeholder="Email or mobile phone number"
                                autocapitalize="off"
                                spellcheck="false"
                                data-email-or-phone-input="true"
                                data-phone-flag-input="true"
                                data-phone-flag-input-default-country="Singapore"
                                data-autofocus="true"
                                data-backup="email_or_phone"
                                data-address-type="shipping"
                                data-most-popular-countries='["Vietnam","Pakistan","Morocco","Czechia"]'
                                data-phone-flag-label="Country/Region code"
                                aria-describedby="checkout-context-step-one"
                                aria-required="true"
                                class="field__input"
                                size="30"
                                type="email"
                                id="checkout_email_or_phone"
                                autocomplete="shipping email"
                              />
                              <div class="flag-selector flag-selector--hidden">
                                <div class="flag-selector__icon"></div>
                                <svg
                                  focusable="false"
                                  aria-hidden="true"
                                  role="presentation"
                                  class="flag-selector__caret icon-svg icon-svg--size-10"
                                ></svg>
                              </div>
                            </div>
                            <input
                              type="hidden"
                              name="checkout[email_or_phone]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="section section--shipping-address"
                      data-shipping-address=""
                    >
                      <div class="section__header">
                        <h2
                          class="section__title"
                          id="section-delivery-title"
                          style={{ textAlign: "left" }}
                        >
                          Shipping address
                        </h2>
                      </div>

                      <div class="section__content">
                        <div class="fieldset">
                          <div class="address-fields" data-address-fields="">
                            <div
                              data-address-field="address1"
                              data-autocomplete-field-container="true"
                              class="field field--required field--show-floating-label"
                            >
                              <div class="field__input-wrapper">
                                <label
                                  class="field__label field__label--visible"
                                  for="checkout_shipping_address_address1"
                                >
                                  Address
                                </label>
                                <input
                                  placeholder="Address"
                                  autocomplete="shipping address-line1"
                                  autocorrect="off"
                                  data-backup="address1"
                                  class="field__input"
                                  aria-required="true"
                                  size="30"
                                  type="text"
                                  name="checkout[shipping_address][address1]"
                                  id="checkout_shipping_address_address1"
                                />

                                <p
                                  class="field__additional-info visually-hidden"
                                  data-address-civic-number-warning=""
                                >
                                  <svg
                                    class="icon-svg icon-svg--size-16 field__message__icon"
                                    aria-hidden="true"
                                    focusable="false"
                                  >
                                    {" "}
                                    <use href="#info"></use>{" "}
                                  </svg>{" "}
                                  Add a house number if you have one
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="step__footer" data-step-footer="">
                    <button
                      name="button"
                      type="submit"
                      id="continue_button"
                      class="step__footer__continue-btn btn"
                      aria-busy="false"
                      onClick={handleClick}
                    >
                      <span
                        class="btn__content"
                        data-continue-button-content="true"
                      >
                        Payment
                      </span>
                      <svg
                        class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button"
                        aria-hidden="true"
                        focusable="false"
                      >
                        {" "}
                      </svg>
                    </button>
                    <a class="step__footer__previous-link" href="/cart">
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        class="icon-svg icon-svg--color-accent icon-svg--size-10 previous-link__icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 10 10"
                      >
                        <path d="M8 1L7 0 3 4 2 5l1 1 4 4 1-1-4-4"></path>
                      </svg>
                      <span class="step__footer__previous-link-content">
                        Return to cart
                      </span>
                    </a>
                  </div>
                </form>
              </div>
            </main>
            <footer class="main__footer" role="contentinfo">
              <p class="copyright-text ">All rights reserved Susan Demo</p>
            </footer>
          </div>
          <aside class="sidebar" role="complementary">
            <div class="sidebar__content">
              <div
                id="order-summary"
                class="order-summary order-summary--is-collapsed"
                data-order-summary=""
              >
                <h2 class="visually-hidden-if-js">Order summary</h2>

                <div class="order-summary__sections">
                  <div class="order-summary__section order-summary__section--product-list">
                    <div class="order-summary__section__content">
                      <table class="product-table">
                        <caption class="visually-hidden">Shopping cart</caption>
                        <thead class="product-table__header">
                          <tr>
                            <th scope="col">
                              <span class="visually-hidden">Product image</span>
                            </th>
                            <th scope="col">
                              <span class="visually-hidden">Description</span>
                            </th>
                            <th scope="col">
                              <span class="visually-hidden">Quantity</span>
                            </th>
                            <th scope="col">
                              <span class="visually-hidden">Price</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody data-order-summary-section="line-items">
                          {cartData &&
                            cartData.map((item, index) => {
                              return (
                                <tr
                                  class="product"
                                  data-product-id="4374661791818"
                                  data-variant-id="31274265903178"
                                  data-product-type="Type 10"
                                  data-customer-ready-visible=""
                                >
                                  <td class="product__image">
                                    <div class="product-thumbnail ">
                                      <div class="product-thumbnail__wrapper">
                                        <img
                                          alt="Test Product - m"
                                          class="product-thumbnail__image"
                                          src={item[2][0]}
                                        />
                                      </div>
                                      <span
                                        class="product-thumbnail__quantity"
                                        aria-hidden="true"
                                      >
                                        {item[1].quantity}
                                      </span>
                                    </div>
                                  </td>
                                  <th class="product__description" scope="row">
                                    <span class="product__description__name order-summary__emphasis">
                                      {item[0].bookName}
                                    </span>
                                  </th>
                                  <td class="product__quantity">
                                    <span class="visually-hidden">3</span>
                                  </td>
                                  <td class="product__price">
                                    <span class="order-summary__emphasis skeleton-while-loading">
                                      ${item[1].totalPrice}
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>

                      <div
                        class="order-summary__scroll-indicator"
                        aria-hidden="true"
                        tabindex="-1"
                        id="order-summary__scroll-indicator"
                      >
                        Scroll for more items
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          class="icon-svg icon-svg--size-12"
                        >
                          {" "}
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div
                    class="order-summary__section order-summary__section--total-lines"
                    data-order-summary-section="payment-lines"
                  >
                    <table class="total-line-table">
                      <caption class="visually-hidden">Cost summary</caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            <span class="visually-hidden">Description</span>
                          </th>
                          <th scope="col">
                            <span class="visually-hidden">Price</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody class="total-line-table__tbody">
                        <tr class="total-line total-line--subtotal">
                          <th class="total-line__name" scope="row">
                            Subtotal
                          </th>
                          <td class="total-line__price">
                            <span
                              class="order-summary__emphasis skeleton-while-loading"
                              data-checkout-subtotal-price-target="6000"
                            >
                              ${AllTotalPriceData}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot class="total-line-table__footer">
                        <tr class="total-line">
                          <th
                            class="total-line__name payment-due-label"
                            scope="row"
                          >
                            <span class="payment-due-label__total">Total</span>
                          </th>
                          <td
                            class="total-line__price payment-due"
                            data-presentment-currency="USD"
                          >
                            <span class="payment-due__currency remove-while-loading">
                              USD
                            </span>
                            <span
                              class="payment-due__price skeleton-while-loading--lg"
                              data-checkout-payment-due-target="6000"
                            >
                              {AllTotalPriceData}
                            </span>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PDFExport>
  );
}

export default CheckoutMain;
