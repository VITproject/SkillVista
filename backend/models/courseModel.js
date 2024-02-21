const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  video_id: mongoose.Schema.Types.ObjectId,
  title: String,
  url: String,
  visible_to: [mongoose.Schema.Types.ObjectId]
});

const questionSchema = new mongoose.Schema({
  question_id: mongoose.Schema.Types.ObjectId,
  text: String,
  options: [String],
  correct_option: String
});

const marksSchema = new mongoose.Schema({
  student_id: mongoose.Schema.Types.ObjectId,
  marks_obtained: Number
});

const quizSchema = new mongoose.Schema({
  quiz_id: mongoose.Schema.Types.ObjectId,
  title: String,
  questions: [questionSchema],
  marks: [marksSchema]
});

const lectureSchema = new mongoose.Schema({
  lecture_id: mongoose.Schema.Types.ObjectId,
  title: String,
  video: videoSchema,
  quiz: quizSchema
});

const subjectSchema = new mongoose.Schema({
  subject_id: mongoose.Schema.Types.ObjectId,
  subject_name: String,
  lectures: [lectureSchema]
});

const courseSchema = new mongoose.Schema({
  course_name: String,
  faculty_id: mongoose.Schema.Types.ObjectId,
  subjects: [subjectSchema]
});

const Courses = mongoose.model('Courses', courseSchema);

module.exports = Courses;
