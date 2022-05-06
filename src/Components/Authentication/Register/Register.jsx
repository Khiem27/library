import React from "react";
import { Link } from "react-router-dom";
Register.propTypes = {};

function Register(props) {
  return (
    <div className="login-form-container">
      <div className="login-text">
        <h2>Create Account</h2>

        <p>Please Register using account detail bellow.</p>
      </div>
      <div className="register-form">
        <form
          method="post"
          action="/account"
          id="create_customer"
          accept-charset="UTF-8"
        >
          <input type="hidden" name="form_type" value="create_customer" />
          <input type="hidden" name="utf8" value="✓" />

          <label htmlFor="FirstName" className="hidden-label">
            First Name
          </label>
          <input
            type="text"
            name="customer[first_name]"
            id="FirstName"
            className="input-full"
            placeholder="First Name"
          />

          <label htmlFor="LastName" className="hidden-label">
            Last Name
          </label>
          <input
            type="text"
            name="customer[last_name]"
            id="LastName"
            className="input-full"
            placeholder="Last Name"
          />

          <label htmlFor="Email" className="hidden-label">
            Email
          </label>
          <input
            type="email"
            name="customer[email]"
            id="Email"
            className="input-full"
            placeholder="Email"
          />

          <label htmlFor="CreatePassword" className="hidden-label">
            Password
          </label>
          <input
            type="password"
            name="customer[password]"
            id="CreatePassword"
            className="input-full"
            placeholder="Password"
          />

          <div className="form-action-button">
            <button type="submit" className="theme-default-button">
              Create
            </button>
          </div>
        </form>

        <div className="account-optional-action">
          <Link to="/account/login">Return to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
