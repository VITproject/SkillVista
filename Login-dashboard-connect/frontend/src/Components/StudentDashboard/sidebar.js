import React from 'react';
import '../../styles/Dashboard/sidebar.css'; 
import logo from '../../logo.svg'; 

function Sidebar() {
  return (
    <div className="Sidebar">
      <img src={logo} alt="Vit Vedant Logo" className="logo" />
      <h2>Hi, Kapil</h2>
      <p>MCA</p>
      <button className="btn">My Subjects</button>
      <button className="btn">No of Subjects</button>
      <button className="btn">No of Lectures</button>
    </div>
  );
}

export default Sidebar;
