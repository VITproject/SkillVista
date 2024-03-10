// models/studentModel.js

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  collegeId: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  ban: {
    type: Date,
    default: null,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  name: {
    type: String,
    required: true,
  },
  course_name:
  {
    type: String,
    trim: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
