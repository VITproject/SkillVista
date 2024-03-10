const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  subject_name: {
    type: String,
    required: true,
  },
});

const courseSchema = new mongoose.Schema({
  course_name: {
    type: String,
    required: true,
  },
  subjects: [subjectSchema],
});

const facultySchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  empId: {
    type: Number,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  courses: [courseSchema],
});

const Faculty = mongoose.model("Faculty", facultySchema);

module.exports = Faculty;
