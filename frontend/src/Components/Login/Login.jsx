import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import illus from "./login.svg";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    collegeId: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({}); //form validation error
  const [message, setMessage] = useState(""); //on-submit error/message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const handleClick = (e) => {
  //   e.preventDefault();

  //   try {
  //     // Perform form validation
  //     const validationErrors = {};
  //     if (formData.collegeId.length < 5) {
  //       validationErrors.collegeId = "ID is unvalid";
  //     }
  //     if (formData.password.length < 2) {
  //       validationErrors.password = "Password required";
  //     }

  //     if (Object.keys(validationErrors).length > 0) {
  //       setErrors(validationErrors);
  //       return;
  //     }

  //     const handleResponse = (response) => {
  //       console.log(response.data.collegeId);
  //       document.cookie = `token=${response.data.token}; expires=${new Date(
  //         Date.now() + 3600000
  //       ).toUTCString()}; path=/`;
  //       const id = response.data.collegeId;
  //       if (id !== parseInt(id)) {
  //         navigate("/popup"); // Adjust the path according to your routes
  //         setMessage(response.data.message);
  //       }
  //       else{
  //         navigate("/FacultyDashboard");
  //       }
  //     };
  //     // Make a POST request to your backend endpoint
  //     axios
  //       .post("http://localhost:4000/auth/s-signin", formData)
  //       .then(handleResponse)
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     setFormData({ collegeId: "", password: "" });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleClick = async (e) => {
  e.preventDefault();

  try {
    // Perform form validation
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

    // Choose API endpoint based on whether collegeId consists only of digits
    const isNumeric = /^\d+$/.test(formData.collegeId);
    const apiEndpoint = isNumeric ? "f-signin" : "s-signin";

    // Build the data object based on the selected API endpoint
    const requestData =
      apiEndpoint === "f-signin"
        ? { empId: formData.collegeId, password: formData.password }
        : { collegeId: formData.collegeId, password: formData.password };

    // Make a POST request to the selected backend endpoint
    const response = await axios.post(`http://localhost:4000/auth/${apiEndpoint}`, requestData);

    // Handle the response and redirection
    if (response.data.collegeId!=="") {
      document.cookie = `token=${response.data.token}; expires=${new Date(
        Date.now() + 3600000
      ).toUTCString()}; path=/`;
      if (apiEndpoint === "f-signin") {
        console.log("facult-dashboard");
        navigate("/FacultyDashboard");
        
      } else {
        if(response.data.course_name==="")
          navigate("/popup"); // Adjust the path according to your routes
        else
          navigate("/StudentDashboard");
      }
    } else {
      setMessage(response.data.message);
    }

    setFormData({ collegeId: "", password: "" });
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
                </Link>{" "}
              </div>

              <div className="form">
                <form onClick={handleClick}>
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
                  {/* {errors.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                  )} */}
                  <br />

                  <div className="div-form-button">
                    <button>Login</button>
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
          <div className="h4">VITVedant</div>
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
