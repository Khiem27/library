import React from "react";
import { Link } from "react-router-dom";
import "../../../CSS/theme-default.css";
Login.propTypes = {};

function Login(props) {
  return (
    <>
      <div id="CustomerLoginForm">
        <form method="post" action="/account/login" id="customer_login">
          <input type="hidden" name="form_type" value="customer_login" />
          <input type="hidden" name="utf8" value="✓" />

          <div className="login-form-container">
            <div className="login-text">
              <h2>Login</h2>
              <p>Please login using account detail bellow.</p>
            </div>
            <div className="login-form">
              <input
                type="email"
                name="customer[email]"
                id="CustomerEmail"
                className="input-full"
                placeholder="Email"
              />

              <input
                type="password"
                value=""
                name="customer[password]"
                id="CustomerPassword"
                className="input-full"
                placeholder="Password"
              />

              <div className="login-toggle-btn">
                <div className="form-action-button">
                  <button type="submit" className="theme-default-button">
                    Sign In
                  </button>
                </div>
                <div className="account-optional-action">
                  <Link to="/account/register" id="customer_register_link">
                    Create account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
