import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./index";

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
                    <button>Login</button>
                    <a href="#" className="fpass">Forget password?</a>
                  </div>
                </form>
              </div>
              <div class="other-links">
                <span className="other-links-a">Or Login with</span><span className="other-links-b">Facebook Google Linkedin</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="div-img-holder">
        <div class="div-info-holder">
          <div class="h3"></div>
          <div class="p"></div>
          <div class="graphic"></div>
        </div>
      </div>
    </div>

  );
}
export default Login;