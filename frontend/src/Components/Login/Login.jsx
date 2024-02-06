import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login">

      <div className="div-form-body">

        <div className="div-form-holder">

          <div className="div-form-content">

            <div className="div-form-items">
              <div className="pg-links">
                <Link to="/" className="pg-a">Login</Link>
                <Link to="/Register" className="pg-a">Register</Link> </div>

              <div className="form">
                <form>
                  <input type="email" placeholder="Enter your Email"></input> <br />
                  <input type="password" placeholder="Enter your password"></input>
                  <div className="div-form-button">
                    <button><Link to="/Dashboard" style={{textDecoration:'none'}}>Login</Link></button>
                    <Link to="/PassReset" className="fpass">Forget password?</Link>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="div-img-holder"><h2>Login</h2>
        <div className="div-info-holder">
          <div className="h4">VITedu </div>
          <div className="p">LMS by VIT bhopal</div>
          <div className="graphic">
            <img src="3646394.jpg" alt="illustration"/>
          </div>
        </div>
      </div>

      </div>

  );
}
export default Login;