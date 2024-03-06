const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  video_id: mongoose.Schema.Types.ObjectId,
  title: String,
  url: String,
  visible_to: [mongoose.Schema.Types.ObjectId],
});

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correct_option: String,
});

const marksSchema = new mongoose.Schema({
  student_id: mongoose.Schema.Types.ObjectId,
  marks_obtained: Number,
});

const quizSchema = new mongoose.Schema({
  title: String,
  questions: [questionSchema],
  marks: [marksSchema],
});

const lectureSchema = new mongoose.Schema({
  title: String,
  video: videoSchema,
  quiz: [quizSchema],
});

const subjectSchema = new mongoose.Schema({
  faculty_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty'
  },
  subject_name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  lectures: [lectureSchema]
});

const courseSchema = new mongoose.Schema({
  course_name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  createdBy: String,
  faculty_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty'
  }, subjects: [subjectSchema]
});

const Courses = mongoose.model("Courses", courseSchema);

module.exports = Courses;
