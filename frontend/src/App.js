import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import PassReset from "./Components/PassReset/PassReset";
import PopUp from "./Components/PopUp/Pop";
import ElearningDashboard from "./Components/Dashboard/ElearningDashboard";



// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/Login" element={<Login />} />
//       </Routes>
//       <Routes>
//         <Route exact path="/Login" element={<Login />} />
//         <Route path="/passreset" element={<PassReset/>} />
//       </Routes>
//       <Routes>

//         <Route exact path="/dashboard" element={<Dashboard/>} />
//       </Routes>

//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ElearningDashboard" element={<ElearningDashboard /> }/>
        {/* <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/passreset" element={<PassReset />} />
        <Route path="/popup" element={<PopUp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
