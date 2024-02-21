import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'; // Make sure you have a Register component
import PassReset from './Components/PassReset/PassReset';
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/passreset" element={<PassReset/>} />
      </Routes>
      <Routes>
        
        <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>

    </Router>
  );   
}

export default App;