import React, { useState } from "react";
import "../styles/ToastComponent.css";

const ToastComponent = ({ message, type, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 500); 
  };

  //const backgroundColor = type === "success" ? "#000000" : "#FF0000";
  const backgroundColor = type === "failure" ? "#000000" : "#FF0000";
  
  const toastClasses = `toast ${isExiting ? "toast-exit" : ""}`;

  return (
    <div className={toastClasses} style={{ backgroundColor }}>
      <div className="message">{message}</div>
      <div className="spacer"></div> {/* This div might be unnecessary if you're only using it to create space */}
      <button className="close-button" onClick={handleClose}>
        Cancel
      </button>
    </div>
  );
};

export default ToastComponent;
