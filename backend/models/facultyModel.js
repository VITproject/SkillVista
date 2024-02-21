const mongoose = require('mongoose');

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
  subjects: [
    {
      subject_id: mongoose.Schema.Types.ObjectId,
    }
  ]
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
