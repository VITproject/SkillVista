import React from 'react';
import '../styles/Dashboard/maincomponent.css';
import {Link} from "react-router-dom"
function MainContent() {
  return (
    <div className="MainContent">
    {/* Assuming these are subject cards, they should be individual components */}
    <div className="subject-card">
    <Link to="/vpage" style={{color:"black",textDecoration:"none"}}>OPERATING SYSTEM</Link>
    </div>
    <div className="subject-card">
    <Link to="/vpage" style={{color:"black",textDecoration:"none"}}>JAVA</Link>
    </div>
    <div className="subject-card">
    <Link to="/vpage" style={{color:"black",textDecoration:"none"}}>NETWOKING</Link>
    </div>
    <div className="subject-card">
    <Link to="/vpage" style={{color:"black",textDecoration:"none"}}>DATABASE</Link>
    </div>

  </div>
  );
}

export default MainContent;