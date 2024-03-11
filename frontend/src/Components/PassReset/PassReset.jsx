import React from "react";
import "./PassReset.css";
//import { Link } from "react-router-dom";

import illus from './ForgotPassword.svg'
const PassReset = () => {
  return (
    <div className="passReset">

      <div className="div-form-body">

        <div className="div-form-holder">

          <div className="div-form-content">

            <div className="div-form-items">
              <h1 >Password Reset</h1>
              <p>To reset your password, enter the email address you use to sign in to iofrm</p>

                <form className="form">
                  <input type="email" placeholder="Enter your Email"></input> <br />
                    <button>Send Reset Link</button>
                </form>

      
              </div>
            </div>
          </div>
        </div>

      <div className="div-img-holder">
        <div className="div-info-holder">
          <div className="h3">VITVedant </div>
          <div className="p">LMS by VIT bhopal</div>
          <div className="graphic">
            <img src={illus} alt="illustration"/>
          </div>
        </div>
      </div>

      </div>

  );
}
export default PassReset;