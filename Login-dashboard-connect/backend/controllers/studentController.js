// controllers/studentController.js

const Student = require('../models/studentModel');
const Courses = require('../models/courseModel');

// Get all students

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().distinct("name");
    const studentIds = students.map((student) => student._id);
    console.log(studentIds);
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get student by ID

const getStudentById = async (req, res) => {
  const { id } = req.body;
  try {
    const student = await Student.findById(id);
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Register student for a course

const registerForCourse = async (req, res) => {
  const { collegeId } = req.body;
  const { course_name } = req.params;
  try {
    const course = await Courses.findOne({ course_name });
    const student = await Student.findOne({ collegeId });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    if (!student)
      return res.status(404).json({ message: 'Course not found' });
    student.course_name = course_name;
    await student.save();
    res.status(201).json({ message: 'Student registered for the course successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Access lecture materials for a subject

const accessSubjectMaterials = async (req, res) => {
  const { student_id, subject_id } = req.body;

  try {
    const student = await Student.findById(student_id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Find the subject in the student's courses
    const subject = student.courses.reduce((foundSubject, course) => {
      if (!foundSubject) {
        foundSubject = course.subjects.find(subjId => subjId.equals(subject_id));
      }
      return foundSubject;
    }, null);

    if (!subject) {
      return res.status(404).json({ message: 'Subject not found for the student' });
    }

    // Find the lectures and quizzes for the subject
    const course = await Courses.findOne({
      'subjects.subject_id': subject_id,
    });

    if (!course) {
      return res.status(404).json({ message: 'Subject not found in the course' });
    }

    const lecturesAndQuizzes = course.subjects
      .find(subj => subj.subject_id.equals(subject_id))
      .lectures.map(lecture => {
        return {
          lectureTitle: lecture.title,
          video: lecture.video,
          quiz: lecture.quiz,
        };
      });

    res.json({ lecturesAndQuizzes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCoursesInfo = async (req, res) => {
  const { course_name } = req.body;
  console.log(course_name);
  try {
    const course = await Courses.findOne({ course_name });
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  getAllStudents,
  getStudentById,
  getCoursesInfo,
  registerForCourse,
  accessSubjectMaterials,
};
