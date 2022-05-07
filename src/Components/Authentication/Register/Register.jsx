import { useSnackbar } from "notistack";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RegisterAction } from "../AuthenticationSlice";
Register.propTypes = {};

function Register(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const action = RegisterAction(data);
    dispatch(action);
    enqueueSnackbar("Đăng Ký Thành Công", {
      variant: "success",
    });
  };
  return (
    <div className="login-form-container">
      <div className="login-text">
        <h2>Create Account</h2>

        <p>Please Register using account detail bellow.</p>
      </div>
      <div className="register-form">
        <form id="create_customer" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="FirstName" className="hidden-label">
            First Name
          </label>
          <input
            type="text"
            name="customer[first_name]"
            id="FirstName"
            className="input-full"
            placeholder="First Name"
            {...register("FirstName", { required: true })}
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
            {...register("LastName", { required: true })}
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
            {...register("Email", { required: true })}
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
            {...register("Password", { required: true })}
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
