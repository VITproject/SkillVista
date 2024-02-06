import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const handleRegister = () => {
  axios
    .post("http://localhost:5000/auth/s-signup", {
      email: email,
      name: name,
      password: password,
    })
    .then((response) => {
      // handle success
      console.log(response.data);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="Register">
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
                <form>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>{" "}
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    onChange={(e) => setName(e.target.value)}
                  ></input>{" "}
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <br />
                  <div className="div-form-button">
                    <button onClick={handleRegister}>Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="div-img-holder">
        <h2>Register</h2>
        <div className="div-info-holder">
          <div className="h4">Vitedu </div>
          <div className="p">LMS by VIT bhopal</div>
          <div className="graphic">
            <img src="3646394.jpg" alt="illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
