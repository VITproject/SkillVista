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
  const { student_id, course_id } = req.body;
  try {
    const student = await Student.findById(student_id);
    const course = await Courses.findById(course_id);

    if (!student || !course) {
      return res.status(404).json({ message: 'Student or Course not found' });
    }

    // Check if student is already registered for the course

    const isRegistered = student.courses.some(course => course.course_id.equals(course_id));
    if (isRegistered) {
      return res.status(400).json({ message: 'Student is already registered for the course' });
    }

    // Register student for the course

    student.courses.push({ course_id, course_name: course.course_name });
    await student.save();

    res.status(201).json({ message: 'Student registered for the course successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Register student for a subject

const registerForSubject = async (req, res) => {
  const { student_id, course_id, subject_id } = req.body;
  try {
    const student = await Student.findById(student_id);
    const course = await Courses.findById(course_id);

    if (!student || !course) {
      return res.status(404).json({ message: 'Student or Course not found' });
    }

    // Find the subject in the course

    const subject = course.subjects.find(subject => subject.subject_id.equals(subject_id));
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found in the course' });
    }

    // Check if student is already registered for the subject

    const isRegistered = student.courses.some(course => (
      course.course_id.equals(course_id) && course.subjects.includes(subject_id)
    ));

    if (isRegistered) {
      return res.status(400).json({ message: 'Student is already registered for the subject' });
    }

    // Register student for the subject

    student.courses.forEach(course => {
      if (course.course_id.equals(course_id)) {
        course.subjects.push(subject_id);
      }
    });

    await student.save();

    res.status(201).json({ message: 'Student registered for the subject successfully' });
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


module.exports = {
  getAllStudents,
  getStudentById,
  registerForCourse,
  registerForSubject,
  accessSubjectMaterials,
};
