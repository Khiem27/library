import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { UserApi } from "../../Api/UserApi/UserApi";
AddProducts.propTypes = {};

function AddProducts(props) {
  const valueProducts = useRef([
    [
      { bookName: "Sách 1", bookPrice: "12", bookDisc: "Khong" },
      { quantity: 1, totalPrice: "12" },
      [
        "https://res.cloudinary.com/thekhiem/image/upload/v1651829611/preqmjkr0ina1jz0fjtt.webp",
        "https://res.cloudinary.com/thekhiem/image/upload/v1651829613/drykwknndzcqssa3znxo.webp",
      ],
    ],
  ]);

  const localProductsData = localStorage.getItem("Products");

  useEffect(() => {
    const dataParse = JSON.parse(localProductsData);
    valueProducts.current = dataParse;
  }, [localProductsData]);
  const valueImage = useRef([]);
  const handleImageChange = async (e) => {
    try {
      if (e.target.files[0]) {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        const res = await UserApi.postAvatar(formData);
        valueImage.current.push(res.data.avatar);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const newArr = [
      data,
      { quantity: 1, totalPrice: data.bookPrice },
      valueImage.current,
    ];
    if (valueProducts.current) {
      valueProducts.current.push(newArr);
      localStorage.setItem("Products", JSON.stringify(valueProducts.current));
    }
  };
  return (
    <main>
      <div className="page-content-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-wrapper">
                <div className="page-content-wrapper">
                  <div
                    id="shopify-section-contact-form-area"
                    className="shopify-section"
                  >
                    <div
                      className="contact_area"
                      id="section-contact-form-area"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-5 offset-lg-1 col-md-12 mb-sm-45 order-1 order-lg-2 mb-md-45">
                            <div className="contact-page-side-content">
                              <h3 className="contact-page-title">Contact Us</h3>

                              <p className="contact-page-message mb-30">
                                Claritas est etiam processus dynamicus, qui
                                sequitur mutationem consuetudium lectorum. Mirum
                                est notare quam littera gothica, quam nunc
                                putamus parum claram anteposuerit litterarum
                                formas human. qui sequitur mutationem
                                consuetudium lectorum. Mirum est notare quam
                              </p>

                              <div className="single-contact-block">
                                <h4>
                                  {" "}
                                  <i className="fa fa-fax"></i> Address{" "}
                                </h4>

                                <p>123 Main Street, Anytown, CA 12345 – USA</p>
                              </div>

                              <div className="single-contact-block">
                                <h4>
                                  {" "}
                                  <i className="fa fa-phone"></i> Phone{" "}
                                </h4>

                                <p>
                                  Mobile: (08) 123 456 789 <br /> Hotline: 1009
                                  678 456
                                </p>
                              </div>

                              <div className="single-contact-block">
                                <h4>
                                  {" "}
                                  <i className="fa fa-envelope-o"></i> Email{" "}
                                </h4>

                                <p>
                                  yourmail@domain.com <br />{" "}
                                  support@hastech.company
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                            <div className="contact-form-content">
                              <h3 className="contact-page-title">Add A Book</h3>

                              <form
                                onSubmit={handleSubmit(onSubmit)}
                                method="post"
                                action="/contact#contact_form"
                                id="contact_form"
                                className="contact-form"
                              >
                                <div className="form-group">
                                  <label>
                                    Book Name{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Book Name"
                                    name="contact[name]"
                                    id="ContactFormName"
                                    {...register("bookName", {
                                      required: true,
                                    })}
                                  />
                                </div>
                                <div className="form-group">
                                  <label>
                                    First Image (URL){" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    onChange={handleImageChange}
                                    type="file"
                                    placeholder="First Image"
                                    id="ContactFormEmail"
                                  />
                                </div>

                                <div className="form-group">
                                  <label>
                                    Last Image (URL){" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    onChange={handleImageChange}
                                    type="file"
                                    placeholder="First Image"
                                    id="ContactFormEmail"
                                  />
                                </div>

                                <div className="form-group">
                                  <label>Price</label>
                                  <input
                                    type="number"
                                    id="ContactFormSubject"
                                    name="contact[subject]"
                                    placeholder="Price"
                                    {...register("bookPrice", {
                                      required: true,
                                    })}
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Discription</label>
                                  <textarea
                                    placeholder="Discription"
                                    className="custom-textarea"
                                    name="contact[body]"
                                    id="ContactFormMessage"
                                    {...register("bookDisc", {
                                      required: true,
                                    })}
                                  ></textarea>
                                </div>

                                <div className="form-group">
                                  <div className="contact-btn">
                                    <button
                                      className="theme-button contact-button"
                                      type="submit"
                                    >
                                      Add Book
                                    </button>
                                  </div>
                                </div>
                              </form>

                              <p className="form-messege pt-10 pb-10 mt-10 mb-10"></p>
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
