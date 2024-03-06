import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate} from "react-router-dom";
import illus from "./login.svg";
import axios from "axios";


const Login = () => {
  const [formData, setFormData] = useState({
    collegeId: "",
    password: "",
  });
  const navigate = useNavigate(); 
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior

    try {
      const validationErrors = {};
      if (formData.collegeId.length < 5) {
        validationErrors.collegeId = "ID is invalid";
      }
      if (formData.password.length < 2) {
        validationErrors.password = "Password required";
      }

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      const response = await axios.post("http://localhost:4000/auth/s-signin", formData);
      console.log(response.data.collegeId);

      const id = response.data.collegeId;
      if (id !== "") {
        navigate('/popup');
        setMessage(response.data.message);
      } 
    } catch (error) {
      console.error(error);
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
                </Link>
              </div>

              <div className="form">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="collegeId"
                    value={formData.collegeId}
                    placeholder="Enter your ID"
                    onChange={handleChange}
                  />
                  {errors.collegeId && (
                    <p style={{ color: "red" }}>{errors.collegeId}</p>
                  )}
                  <br />

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter your password"
                    onChange={handleChange}
                  />
                  <br />

                  <div className="div-form-button">
                    <button type="submit">Login</button>
                    <Link to="/PassReset" className="fpass">
                      Forget password?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <h3>{message}</h3>
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