import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import PassReset from "./Components/PassReset/PassReset";
import StudentDashboard from "./Components/StudentDashboard/studentdash";
import PopUp from "./Components/PopUp/Pop";
import Vpage from "./Components/VideoPage/vpage";
import Quiz from "./Components/Quiz/Quiz";
import FacultyDashboard from "./Components/FacultyDashboard/facultydash";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/passreset" element={<PassReset />} />
        <Route path="/popup" element={<PopUp />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/FacultyDashboard" element={<FacultyDashboard/>} />
        <Route path="/Vpage" element={<Vpage />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default StudentDashboard;
