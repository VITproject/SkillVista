import React from 'react';
import MainContent from './maincontent';
import Sidebar from './sidebar';

function StudentDashboard() {
  return (
    <div className="container StudentDashboard">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default StudentDashboard;