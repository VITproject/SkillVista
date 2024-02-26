import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import illus from "./login.svg";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //form validation error
  const [errors, setErrors] = useState({});
  //on-submit error/message
  //const [isError, setIsError] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();

    try {
      // Perform form validation
      const validationErrors = {};
      if (formData.email.length < 5) {
        validationErrors.email = "ID is unvalid";
      }
      if (formData.password.length < 1) {
        validationErrors.password = "Password required";
      }

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      // Make a POST request to your backend endpoint
      axios.post("http://localhost:4000/auth/s-signin", formData);
      //console.log(res);
      // Clear the form after successful registration
      setFormData({ email: "", password: "" });
    } catch (error) {
      console.error(error);
      //setIsError(error.message+": User Already Exist Refresh And Try Again");
    }
  };
  return (
    <div className="Login">
      <div className="div-form-body">
        <div className="div-form-holder">
          <div className="div-form-content">
            <div className="div-form-items">
              <div className="pg-links">
                <Link to="/" className="pg-a">
                  Login
                </Link>
                <Link to="/Register" className="pg-a">
                  Register
                </Link>{" "}
              </div>

              <div className="form">
                <form onClick={handleClick}>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    placeholder="Enter your ID"
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
                  <br />

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter your password"
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                  )}
                  <br />

                  <div className="div-form-button">
                    <button>Login
                      {/* <Link to="/Dashboard" style={{ textDecoration: "none" }}>
                        Login
                      </Link> */}
                    </button>
                    <Link to="/PassReset" className="fpass">
                      Forget password?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="div-img-holder">
        <h2>Login</h2>
        <div className="div-info-holder">
          <div className="h4">VITedu </div>
          <div className="p">LMS by VIT bhopal</div>
          <div className="graphic">
            <img src={illus} alt="illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
