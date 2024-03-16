import React, { useState } from 'react';
import './UploadLecture.css'; // Import CSS file for styling

const UploadLecture = () => {
  const [formData, setFormData] = useState({
    course_name: '',
    subject_name: '',
    lecture_title: '',
    video: null,
    quiz_title: '',
    questions: Array(0).fill({
      question: '',
      options: Array(4).fill(''),
      correctAnswer: '',
    }),
  });

  const [numQuestions, setNumQuestions] = useState(5);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleQuestionChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const questions = [...prevData.questions];
      questions[index] = {
        ...questions[index],
        [name]: value,
      };
      return { ...prevData, questions };
    });
  };

  const handleOptionChange = (questionIndex, optionIndex, e) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const questions = [...prevData.questions];
      const options = [...questions[questionIndex].options];
      options[optionIndex] = value;
      questions[questionIndex] = {
        ...questions[questionIndex],
        options,
      };
      return { ...prevData, questions };
    });
  };

  const handleCorrectOptionChange = (questionIndex, e) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const questions = [...prevData.questions];
      questions[questionIndex] = {
        ...questions[questionIndex],
        correctAnswer: value,
      };
      return { ...prevData, questions };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleNumQuestionsChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setNumQuestions(value);
    } else {
      setNumQuestions(0);
    }
  };
  

  const handleNumQuestionsSubmit = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      questions: Array(numQuestions).fill({
        question: '',
        options: Array(4).fill(''),
        correctAnswer: '',
      }),
    }));
  };

  return (
    <div className="upload-lecture-container">
      <h1>Upload Lecture</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course Name:</label>
          <input type="text" name="course_name" value={formData.course_name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Subject Name:</label>
          <input type="text" name="subject_name" value={formData.subject_name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Lecture Title:</label>
          <input type="text" name="lecture_title" value={formData.lecture_title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Video:</label>
          <input type="file" name="video" onChange={handleChange} accept="video/*" required />
        </div>
        <div className="form-group">
          <label>Quiz Title:</label>
          <input type="text" name="quiz_title" value={formData.quiz_title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Number of Questions:</label>
          <input type="number" value={numQuestions} onChange={handleNumQuestionsChange} min="1" required />
          <button type="button" onClick={handleNumQuestionsSubmit}>Update Number of Questions</button>
        </div>
        {formData.questions.map((question, index) => (
          <div key={index} className="question-group">
            <label>Question {index + 1}:</label>
            <input
              type="text"
              name="question"
              value={question.question}
              onChange={(e) => handleQuestionChange(index, e)}
              required
            />
            <div className="options">
              {question.options.map((option, optionIndex) => (
                option !== null && (
                  <label key={optionIndex}>
                    Option {String.fromCharCode(65 + optionIndex)}:
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => handleOptionChange(index, optionIndex, e)}
                      required
                    />
                  </label>
                )
              ))}
            </div>
            <label>Correct Answer:</label>
            <select value={question.correctAnswer} onChange={(e) => handleCorrectOptionChange(index, e)} required>
              <option value="">Select correct answer</option>
              {question.options.map((option, optionIndex) => (
                option !== null && (
                  <option key={optionIndex} value={option}>{`Option ${String.fromCharCode(65 + optionIndex)}`}</option>
                )
              ))}
            </select>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadLecture;
