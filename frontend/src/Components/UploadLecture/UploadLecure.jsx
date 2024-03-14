import React, { useState } from 'react';

const UploadLecture = () => {
  const [formData, setFormData] = useState({
    course_name: '',
    subject_name: '',
    lecture_title: '',
    video: null,
    quiz_title: '',
    questions: Array(5).fill({
      question: '',
      options: Array(4).fill(''),
      correctAnswer: '',
    }),
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can send the formData to an API or perform any other necessary action
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Course Name:
        <input type="text" name="course_name" value={formData.course_name} onChange={handleChange} required />
      </label>

      <label>
        Subject Name:
        <input type="text" name="subject_name" value={formData.subject_name} onChange={handleChange} required />
      </label>

      <label>
        Lecture Title:
        <input type="text" name="lecture_title" value={formData.lecture_title} onChange={handleChange} required />
      </label>

      <label>
        Video:
        <input type="file" name="video" onChange={handleChange} accept="video/*" required />
      </label>

      <label>
        Quiz Title:
        <input type="text" name="quiz_title" value={formData.quiz_title} onChange={handleChange} required />
      </label>

      {formData.questions.map((question, index) => (
        <div key={index}>
          <label>
            Question {index + 1}:
            <input
              type="text"
              name="question"
              value={question.question}
              onChange={(e) => handleQuestionChange(index, e)}
              required
            />
          </label>

          <div>
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex}>
                Option {optionIndex + 1}:
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, optionIndex, e)}
                  required
                />
              </label>
            ))}
          </div>

          <label>
            Correct Answer:
            <input
              type="text"
              name="correctAnswer"
              value={question.correctAnswer}
              onChange={(e) => handleQuestionChange(index, e)}
              required
            />
          </label>
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default UploadLecture;
