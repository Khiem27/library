import React from "react";

AddProducts.propTypes = {};

function AddProducts(props) {
  return (
    <main>
      <div class="page-content-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="page-wrapper">
                <div class="page-content-wrapper">
                  <div
                    id="shopify-section-contact-form-area"
                    class="shopify-section"
                  >
                    <div class="contact_area" id="section-contact-form-area">
                      <div class="container">
                        <div class="row">
                          <div class="col-lg-5 offset-lg-1 col-md-12 mb-sm-45 order-1 order-lg-2 mb-md-45">
                            <div class="contact-page-side-content">
                              <h3 class="contact-page-title">Contact Us</h3>

                              <p class="contact-page-message mb-30">
                                Claritas est etiam processus dynamicus, qui
                                sequitur mutationem consuetudium lectorum. Mirum
                                est notare quam littera gothica, quam nunc
                                putamus parum claram anteposuerit litterarum
                                formas human. qui sequitur mutationem
                                consuetudium lectorum. Mirum est notare quam
                              </p>

                              <div class="single-contact-block">
                                <h4>
                                  {" "}
                                  <i class="fa fa-fax"></i> Address{" "}
                                </h4>

                                <p>123 Main Street, Anytown, CA 12345 – USA</p>
                              </div>

                              <div class="single-contact-block">
                                <h4>
                                  {" "}
                                  <i class="fa fa-phone"></i> Phone{" "}
                                </h4>

                                <p>
                                  Mobile: (08) 123 456 789 <br /> Hotline: 1009
                                  678 456
                                </p>
                              </div>

                              <div class="single-contact-block">
                                <h4>
                                  {" "}
                                  <i class="fa fa-envelope-o"></i> Email{" "}
                                </h4>

                                <p>
                                  yourmail@domain.com <br />{" "}
                                  support@hastech.company
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-12 order-2 order-lg-1">
                            <div class="contact-form-content">
                              <h3 class="contact-page-title">Add A Book</h3>

                              <form
                                method="post"
                                action="/contact#contact_form"
                                id="contact_form"
                                class="contact-form"
                              >
                                <div class="form-group">
                                  <label>
                                    Book Name <span class="required">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Book Name"
                                    class=""
                                    name="contact[name]"
                                    id="ContactFormName"
                                    value=""
                                  />
                                </div>
                                <div class="form-group">
                                  <label>
                                    First Image (URL){" "}
                                    <span class="required">*</span>
                                  </label>
                                  <input
                                    type="email"
                                    placeholder="First Image"
                                    class=""
                                    name="contact[email]"
                                    id="ContactFormEmail"
                                    value=""
                                  />
                                </div>

                                <div class="form-group">
                                  <label>
                                    Last Image (URL){" "}
                                    <span class="required">*</span>
                                  </label>
                                  <input
                                    type="email"
                                    placeholder="Last Image"
                                    class=""
                                    name="contact[email]"
                                    id="ContactFormEmail"
                                    value=""
                                  />
                                </div>

                                <div class="form-group">
                                  <label>Price</label>
                                  <input
                                    type="number"
                                    id="ContactFormSubject"
                                    name="contact[subject]"
                                    placeholder="Price"
                                    value=""
                                  />
                                </div>
                                <div class="form-group">
                                  <label>Discription</label>
                                  <textarea
                                    placeholder="Discription"
                                    class="custom-textarea"
                                    name="contact[body]"
                                    id="ContactFormMessage"
                                  ></textarea>
                                </div>

                                <div class="form-group">
                                  <div class="contact-btn">
                                    <button
                                      class="theme-button contact-button"
                                      type="submit"
                                    >
                                      Add Book
                                    </button>
                                  </div>
                                </div>
                              </form>

                              <p class="form-messege pt-10 pb-10 mt-10 mb-10"></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AddProducts;
