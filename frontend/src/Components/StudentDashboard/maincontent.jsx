import React from "react";
import usebearStore from "../../State/state";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard/maincomponent.css";
import { Link } from "react-router-dom";
function MainContent() {
  const [coursesInfo, setCoursesInfo] = useState([]);
  const selectedCourse = usebearStore((state) => state.selectedCourse); // Get selected course from Zustand

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to fetch course info based on the selected course
        const response = await axios.get(
          `http://localhost:4000/student/getCoursesInfo?course_name=${selectedCourse}`
        );
        setCoursesInfo(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, [selectedCourse]);

  return (
    <div className="MainContent">
      <div className="subject-card">
        <Link to="/vpage" style={{ color: "black", textDecoration: "none" }}>
          OPERATING SYSTEM
        </Link>
      </div>
      <div className="subject-card">
        <Link to="/vpage" style={{ color: "black", textDecoration: "none" }}>
          JAVA
        </Link>
      </div>
      <div className="subject-card">
        <Link to="/vpage" style={{ color: "black", textDecoration: "none" }}>
          NETWOKING
        </Link>
      </div>
      <div className="subject-card">
        <Link to="/vpage" style={{ color: "black", textDecoration: "none" }}>
          DATABASE
        </Link>
      </div>
    </div>
  );
}

export default MainContent;
