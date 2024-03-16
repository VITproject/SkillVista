import React, { useState } from 'react';
import './Quiz.css'; // Import CSS file for styling

const Quiz = () => {
  const [answers, setAnswers] = useState(new Array(2).fill(null));
  const questions = [
    {
      "question": "What is the main purpose of an operating system?",
      "options": ["To manage hardware resources", "To provide a graphical user interface", "To run applications", "To store data"],
      "correct_option": "To manage hardware resources"
    },
    {
      "question": "Which component of an operating system handles process scheduling?",
      "options": ["Kernel", "Shell", "Compiler", "File System"],
      "correct_option": "Kernel"
    }
  ];

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = selectedOption;
      return newAnswers;
    });
  };

  const renderQuestions = () => {
    return questions.map((question, index) => (
      <div key={index} className="card">
        <div className="card-body">
          <h5 className="card-title">{`${index + 1}. ${question.question}`}</h5>
          <ul className="options-list">
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <input
                  type="radio"
                  id={`option-${option}-${index}`}
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={() => handleAnswerChange(index, option)}
                />
                <label htmlFor={`option-${option}-${index}`}>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ));
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Operating System Quiz</h1>
      {renderQuestions()}
      <button className="submit-button" onClick={() => console.log('Selected Answers:', answers)}>
        Submit
      </button>
    </div>
  );
};

export default Quiz;
