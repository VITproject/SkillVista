// models/studentModel.js

const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  subject_name: String,
  faculty_name: String,
});

const courseSchema = new mongoose.Schema({
  course_name: String,
  subjects: [subjectSchema],
});

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  courses: [courseSchema],
});

module.exports = mongoose.model('Student', studentSchema);
