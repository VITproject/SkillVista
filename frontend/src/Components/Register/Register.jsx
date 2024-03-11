import React, {useState } from 'react';
import "./Register.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import illus from './register.svg';

const Register = () => {
  const [formData, setFormData] = useState({
    collegeId:'',
    name: '',
    password: '',
    confirmPassword: '',
  });
  //form validation error
  const [errors, setErrors] = useState({});
  //on-submit registration error/message
  const [isError, setIsError] = useState("");
  //on-successfull submission
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear validation error on change
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Perform form validation
  //     const validationErrors = {};
      
  //     if (formData.password.length < 8) {
  //       validationErrors.password = 'Password must be at least 8 characters';
  //     }
  //     if (formData.password !== formData.confirmPassword) {
  //       validationErrors.confirmPassword = 'Passwords do not match';
  //     }

  //     if (Object.keys(validationErrors).length > 0) {
  //       setErrors(validationErrors);
  //       return;
  //     }

  //     // Make a POST request to your backend endpoint
  //     const id=formData.collegeId;
  //     if(id!==parseInt(id))
  //       await axios.post('http://localhost:4000/auth/s-signup', formData);
  //     else
  //       await axios.post('http://localhost:4000/auth/f-signup', formData);


  //     // Clear the form after successful registration
  //     setFormData({collegeId:'', name: '', password: '', confirmPassword: '' });
  //     setMessage("Registration Successfull");
  //   } 
  //   catch (error) {
  //     //console.error(error);
  //     setIsError(error.message+": User Already Exist Refresh And Try Again");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform form validation
      const validationErrors = {};
      
      if (formData.password.length < 8) {
        validationErrors.password = 'Password must be at least 8 characters';
      }
      if (formData.password !== formData.confirmPassword) {
        validationErrors.confirmPassword = 'Passwords do not match';
      }
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
  
      // Choose API endpoint based on whether collegeId consists only of digits
      const isNumeric = /^\d+$/.test(formData.collegeId);
      const apiEndpoint = isNumeric ? "f-signup" : "s-signup";
  
      // Build the data object based on the selected API endpoint
      const requestData =
        apiEndpoint === "f-signup"
          ? { empId: formData.collegeId, password: formData.password }
          : { collegeId: formData.collegeId, password: formData.password };
  
      // Make a POST request to the selected backend endpoint
       await axios.post(`http://localhost:4000/auth/${apiEndpoint}`, requestData);
  
      // Clear the form after successful registration
      setFormData({collegeId:'', name: '', password: '', confirmPassword: '' });
      setMessage("Registration Successfull");
    } 
    catch (error) {
      console.error(error);
      setIsError(error.message);
    }
  };

  return (
    <div className="Register">
      <div className="div-form-body">
        <div className="div-form-holder-r">
          {isError !== "" && <h2 style={{ color: "red" }}>{isError}</h2>}
          {isError ==="" && <h2 style={{ color: "green" }}>{message}</h2>}
          <div className="div-form-content">
            <div className="div-form-items">
              <div className="pg-links">
                <Link to="/" className="pg-a">Login</Link>
                <Link to="/Register" className="pg-a">Register</Link>
              </div>

              <div className="form">
                <form onSubmit={handleSubmit}>
                 
                  <input type="text" name="collegeId" value={formData.collegeId} placeholder="Enter your College ID" onChange={handleChange} />
                  <br/>

                  <input type="text" name="name" value={formData.name} placeholder="Enter your full name" onChange={handleChange} />
                  <br />

                  <input type="password" name="password" value={formData.password} placeholder="Enter your password" onChange={handleChange} />
                  {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                  <br />

                  <input type="password" name="confirmPassword" value={formData.confirmPassword} placeholder="Confirm your password" onChange={handleChange} />
                  {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
                  <br />

                  <div className="div-form-button">
                    <button type="submit">Register</button>
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="div-img-holder-r">
        <h2>Register</h2>
        <div className="div-info-holder">
          <div className="img-h">VITVedant </div>
          <div className="pa">LMS by VIT bhopal</div>
          <div className="graphic">
            <img src={illus} alt="illustration" />
          </div>
        </div>
      </div>
    </div>
  );
  };

export default Register;
