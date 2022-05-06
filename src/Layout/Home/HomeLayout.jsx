import React from "react";
import Products from "../../Components/Authentication/Products/Products";
import Header from "../../Components/Header/Header";

HomeLayout.propTypes = {};

function HomeLayout(props) {
  return (
    <body id="susan-demo" className="template-index ">
      <div className="wrapper">
        <Header />
        <main>
          <div
            id="shopify-section-template--14336701694026__1643453780b7f6393b"
            className="shopify-section"
          >
            <div
              className="featured-product"
              id="section-template--14336701694026__1643453780b7f6393b"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title-wrapper text-center section-space--half">
                      <h2 className="section-title">Featured Collection</h2>

                      <p className="section-subtitle">
                        Tất cả các đầu sách phổ biến
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <Products />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}

export default HomeLayout;
