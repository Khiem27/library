import React from "react";
import Login from "../../../Components/Authentication/Login/Login";
import Header from "../../../Components/Header/Header";

LoginLayout.propTypes = {};

function LoginLayout(props) {
  return (
    <body id="account" className="template-login ">
      <div className="wrapper">
        <Header />
        <main>
          <div className="customer-page theme-default-margin">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                  <div className="login">
                    <Login />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}

export default LoginLayout;
