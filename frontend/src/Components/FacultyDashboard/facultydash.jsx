import React from "react";
import MainContent from "./maincontent";
import Sidebar from "./sidebar";

function FacultyDashboard() {
  // const token = document.cookie.includes("token");
  // if (!token) {
  //   return <h1>Please login first.</h1>;
  // }
  return (
    <div className="container FacultyDashboard">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default FacultyDashboard;
