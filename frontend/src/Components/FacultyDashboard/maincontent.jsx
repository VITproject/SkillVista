import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import usebearStore from '../../State/state';
import '../styles/Dashboard/maincomponent.css';
import {Form, Link} from "react-router-dom"
function MainContent() {
   
  const [subjects, setSubjects] = useState([]); // Corrected destructuring of useState
  const collegeId = usebearStore((state) => state.collegeId); 
  const password = usebearStore((state) => state.password);   // Access password from Zustand

  useEffect(() => {
    // Fetch data from MongoDB here by API
    const requestData = {
      collegeId: collegeId, // Use collegeId from Zustand
      password: password    // Use password from Zustand
    };

    const apiEndpoint = "getCoursesInfo"; // Assuming you have this endpoint defined

    axios.get(`http://localhost:4000/student/${apiEndpoint}`, { params: requestData }) // Changed to pass requestData as params
      .then(response => {
        setSubjects(response.data); // Corrected setting of subjects
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [collegeId, password]); // Update the effect when collegeId or password change

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