import React from "react";
import "../styles/Dashboard/sidebar.css";
import logo from "../../logo.svg";
import { useEffect } from "react";
import usebearStore from "../../State/state";

function Sidebar() {
  const storedId = localStorage.getItem("Id");
  const storedCourse = localStorage.getItem("selectedCourse");

  const setId = usebearStore((state) => state.setId);
  const setSelectedCourse = usebearStore((state) => state.setSelectedCourse);

  useEffect(() => {
    if (storedId) {
      setId(storedId);
    }
    if (storedCourse) {
      setSelectedCourse(storedCourse);
    }
  }, []); // Only run the effect once when the component mounts

  const { Id, selectedCourse } = usebearStore(); // Destructure the state directly

  return (
    <div className="Sidebar">
      <img src={logo} alt="Vit Vedant Logo" className="logo" />
      <h2>23MCA10031</h2>
      <p>{selectedCourse}</p>
      <button className="btn">My Learnings</button>
      <button className="btn">Subjects</button>
      <button className="btn">Lectures</button>
    </div>
  );
}

export default Sidebar;
