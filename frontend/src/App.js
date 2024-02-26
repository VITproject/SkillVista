import React, { } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'; 
import PassReset from './Components/PassReset/PassReset';
import Dashboard from './Components/S-Dashboard/SDashboard';
import PopUp from './Components/PopUp/Pop';

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
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/passreset" element={<PassReset />} />
        <Route path='/popup' element={<PopUp/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;