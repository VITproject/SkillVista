import React from "react";
import '../styles/Dashboard/sidebar.css';
import logo from '../../logo.svg'; 
import {Link} from "react-router-dom";
function Sidebar() {
  return (
    <div className="Sidebar">
      <img src={logo} alt="Vit Vedant Logo" className="logo" />
      <h2>Faculty Name</h2>
      <button className="btn">Overview</button>
      <button className="btn">Student Enrolled</button>
      <button className="btn" >
      <Link to="/UploadLecture" style={{color:"white",textDecoration:"none"}}>Upload Lectures</Link>
      </button>
    </div>
  );
}

export default Sidebar;
