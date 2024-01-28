import React from "react";
import './Register.css';
import './index';
import {Link} from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Register=()=>{
    return (
        <div className="Register">
          <div className="div-form-body">
            <div className="div-form-holder">
              <div className="div-form-content">
                <div className="div-form-items">
                  <div className="pg-links">
                  <Link to="/Login" className="pg-a">Login</Link>
                  <Link to="/" className="pg-a">Register</Link> </div>
                  <div className="form">
                  <form>
                    <input type="email" placeholder="Enter your Email"></input> <br/>
                    <input type="text" placeholder="Enter your full name"></input> <br/>
                    <input type="password" placeholder="Enter your password"></input><br/>
                    <div className="div-form-button">
                        <button>Register</button>
                    </div>
                    </form>
                  </div>
                  <div className="other-link">
                    <span className="other-links-a">Or Register with</span><span className="other-links-b">Facebook Google Linkedin</span>
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
export default Register;