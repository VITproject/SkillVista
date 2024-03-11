import React from "react";
import MainContent from "./maincontent";
import Sidebar from "./sidebar";

function StudentDashboard() {
  // const token = document.cookie.includes("token");
  // if (!token) {
  //   return <h1>Please login first.</h1>;
  // }
  return (
    <div className="container StudentDashboard">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default StudentDashboard;
