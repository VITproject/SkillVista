import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import PassReset from "./Components/PassReset/PassReset";
import PopUp from "./Components/PopUp/Pop"
import  VideoPage from "./Components/VideoPage/maincontent";
import Quiz from "./Components/Quiz/Quiz";
import StudentDashboard from "./Components/StudentDashboard/studentdash";
import FacultyDashboard from "./Components/FacultyDashboard/facultydash";
import UploadLecture from "./Components/UploadLecture/UploadLecure";
function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/passreset" element={<PassReset />} />
      <Route path="/popup" element={<PopUp />} />
      <Route path="/StudentDashboard" element={<StudentDashboard/>} />
      <Route path="/FacultyDashboard" element={<FacultyDashboard/>} />
      <Route path="/Vpage" element={<VideoPage/>}/>
      <Route path="/Quiz" element={<Quiz/>}  />
      <Route path="UploadLecture" element={<UploadLecture/>} />
    </Routes>

  );
}

export default App;
