import React from "react";
import usebearStore from "../../State/state";
import { useEffect } from "react";
import '../styles/Dashboard/sidebar.css';
import logo from '../../logo.svg'; 
import {Link} from "react-router-dom";
function Sidebar() {
  //Zuststand ->  Retrieve data from localStorage
  const storedId = localStorage.getItem("Id");

  const setId = usebearStore((state) => state.setId);

  useEffect(() => {
    if (storedId) {
      setId(storedId);
    }
  }, [storedId, setId]);

  // Use Zustand store for rendering
  const Id = usebearStore((state) => state.Id);
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
