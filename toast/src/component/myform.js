// src/components/TestForm.js
import React, { useState } from 'react';
import ToastComponent from './toastcomponent';

const TestForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('success'); // or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setMessage('This is a success toast!');
    setType('success');
    setMessage('This is a failure toast!');
    setType('failure');
  };

  return (
    <div>
      {showToast && (
        <ToastComponent
          message={message}
          type={type}
          onClose={() => setShowToast(false)}
        />
      )}
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestForm;
