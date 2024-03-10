import React from 'react';
import '../styles/sidebar.css'; 
import logo from '../logo.svg'; 

function Sidebar() {
  return (
    <div className="Sidebar">
      <img src={logo} alt="Vit Vedant Logo" className="logo" />
      <h2>Faculty Name</h2>
      <p>Branch : MCA</p>
      <button className="btn">Overview</button>
      <button className="btn">Student Enrolled</button>
      <button className="btn">Upload Lectures </button>
    </div>
  );
}

export default Sidebar;
