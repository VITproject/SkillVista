import React, { useState } from 'react';

const Quiz = () => {
  const [answers, setAnswers] = useState(new Array(5).fill(null));
  const questions = [
    'What is the capital of France?',
    'Which planet is known as the Red Planet?',
    'What is the largest mammal in the world?',
    'What is Variable?',
    'What is Data Type?'
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
      <div key={index} >
        <h3>{`${index + 1}. ${question}`}</h3>
        <ul>
          <li>
            <input
              type="radio"
              id={`optionA-${index}`}
              name={`question-${index}`}
              value="A"
              checked={answers[index] === 'A'}
              onChange={() => handleAnswerChange(index, 'A')}
            />
            <label htmlFor={`optionA-${index}`}>Option A</label>
          </li>
          <li>
            <input
              type="radio"
              id={`optionB-${index}`}
              name={`question-${index}`}
              value="B"
              checked={answers[index] === 'B'}
              onChange={() => handleAnswerChange(index, 'B')}
            />
            <label htmlFor={`optionB-${index}`}>Option B</label>
          </li>
          <li>
            <input
              type="radio"
              id={`optionC-${index}`}
              name={`question-${index}`}
              value="C"
              checked={answers[index] === 'C'}
              onChange={() => handleAnswerChange(index, 'C')}
            />
            <label htmlFor={`optionC-${index}`}>Option C</label>
          </li>
          <li>
            <input
              type="radio"
              id={`optionD-${index}`}
              name={`question-${index}`}
              value="D"
              checked={answers[index] === 'D'}
              onChange={() => handleAnswerChange(index, 'D')}
            />
            <label htmlFor={`optionD-${index}`}>Option D</label>
          </li>
        </ul>
      </div>
    ));
  };

  return (
    <div>
      <h1>Answer Following Question</h1>
      {renderQuestions()}
      <button onClick={() => console.log('Selected Answers:', answers)}>
        Submit
      </button>
    </div>
  );
};

export default Quiz;
