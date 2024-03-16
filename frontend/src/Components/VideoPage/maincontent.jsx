import React from "react";
import MediaCard from "./vpage";
import Sidebar from "./sidebar";

function VideoPage() {
  // const token = document.cookie.includes("token");
  // if (!token) {
  //   return <h1>Please login first.</h1>;
  // }
  return (
    <div className="container StudentDashboard">
      <Sidebar />
      <MediaCard />
    </div>
  );
}

export default VideoPage;
