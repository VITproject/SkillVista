import React from 'react';
import MainContent from './maincontent';
import Sidebar from './sidebar';

function FacultyDashboard() {
  return (
    <div className="container FacultyDashboard">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default FacultyDashboard;