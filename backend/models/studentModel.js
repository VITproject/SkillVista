// models/studentModel.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  courses: [
    {
      course_id: mongoose.Schema.Types.ObjectId,
      course_name: String,
    }
  ]
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

