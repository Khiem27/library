import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../../CSS/theme-default.css";
import { LoginAction } from "../AuthenticationSlice";
Login.propTypes = {};

function Login(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const action = LoginAction(data);
    dispatch(action);
  };
  // const [dataUser, setDataUser] = useState();
  // const dataUserLoginData = localStorage.getItem("UserLoginData");
  // useEffect(() => {
  //   const dataUserLoginDataParse = JSON.parse(dataUserLoginData);
  //   setDataUser(dataUserLoginDataParse);
  //   console.log(dataUser);
  // }, []);
  return (
    <>
      <div id="CustomerLoginForm">
        <form onSubmit={handleSubmit(onSubmit)} id="customer_login">
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
                {...register("Email", { required: true })}
              />

              <input
                type="password"
                name="customer[password]"
                id="CustomerPassword"
                className="input-full"
                placeholder="Password"
                {...register("Password", { required: true })}
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
