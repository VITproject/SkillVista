import React from 'react';
import Sidebar from '../src/components/sidebar';
import MainContent from '../src/components/maincontent';
import '../src/App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
