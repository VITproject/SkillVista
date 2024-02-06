// models/facultyModel.js
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  video_title: String,
  video_url: String,
});

const quizSchema = new mongoose.Schema({
  quiz_title: String,
  questions: [String],
});

const lectureSchema = new mongoose.Schema({
  lecture_name: String,
  videos: [videoSchema],
  quiz: [quizSchema],
});

const subjectSchema = new mongoose.Schema({
  subject_name: String,
  lectures: [lectureSchema],
});

const courseSchema = new mongoose.Schema({
  course_name: String,
  subjects: [subjectSchema],
});

const facultySchema = new mongoose.Schema({
  name: String,
  empId: Number,
  password: String,
  courses: [courseSchema],
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
