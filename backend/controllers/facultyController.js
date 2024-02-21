// controllers/facultyController.js

const Faculty = require("../models/facultyModel");
const Courses = require('../models/courseModel');
const Students = require('../models/studentModel');

// Get all faculties
const getAllFaculties = async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.json(faculties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get faculty by ID
const getFacultyById = async (req, res) => {
  const { id } = req.body;
  try {
    const faculty = await Faculty.findById(id);
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create Course by faculty

const createCourse = async (req, res) => {
  const { course_name } = req.body;
  const faculty_id = req.empId;

  try {
    const newCourse = new Courses({
      course_name,
      faculty_id,
      subjects: [],
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Create Subjects under faculty -> course

const createSubject = async (req, res) => {
  const { course_id } = req.body;
  const { subject_name } = req.body;

  try {
    const course = await Courses.findById(course_id);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const newSubject = {
      subject_name,
      lectures: [],
    };

    course.subjects.push(newSubject);
    const updatedCourse = await course.save();

    res.status(201).json(updatedCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Add lectures under faculty -> coursec -> Subject

const addLecture = async (req, res) => {
  const { course_id, subject_id } = req.body;
  const { title, video_url, quiz } = req.body;

  try {
    const course = await Courses.findById(course_id);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const subject = course.subjects.find((s) => s._id.toString() === subject_id);

    if (!subject) {
      return res.status(404).json({ error: 'Subject not found' });
    }

    const newLecture = {
      title,
      video: { url: video_url },
      quiz,
    };

    subject.lectures.push(newLecture);
    const updatedCourse = await course.save();

    res.status(201).json(updatedCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add Quiz under faculty -> coursec -> Subject ->lecture

const addQuiz = async (req, res) => {
  const { course_id, subject_id, lecture_id } = req.body;
  const { title, questions } = req.body;

  try {
    const course = await Courses.findById(course_id);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const subject = course.subjects.find((s) => s._id.toString() === subject_id);

    if (!subject) {
      return res.status(404).json({ error: 'Subject not found' });
    }

    const lecture = subject.lectures.find((l) => l._id.toString() === lecture_id);

    if (!lecture) {
      return res.status(404).json({ error: 'Lecture not found' });
    }

    const newQuiz = {
      title,
      questions,
    };

    lecture.quiz.push(newQuiz);
    const updatedCourse = await course.save();

    res.status(201).json(updatedCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Removing or deleting any thing 

// fetching the course

const removeStudent = async (req, res) => {
  const { course_id, student_id } = req.body;

  try {
    const course = await Courses.findById(course_id);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Remove student from the course
    course.students = course.students.filter((s) => s.toString() !== student_id);

    await course.save();

    res.json({ message: 'Student removed from the course successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Removing the subject from course

const removeSubject = async (req, res) => {
  const { course_id, subject_id } = req.body;

  try {
    const course = await Courses.findById(course_id);

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Remove subject from the course
    course.subjects = course.subjects.filter((s) => s._id.toString() !== subject_id);

    await course.save();

    res.json({ message: 'Subject removed from the course successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deleting the course 

const deleteCourse = async (req, res) => {
  const { course_id } = req.body;

  try {
    // Remove the course from the database
    await Courses.findByIdAndDelete(course_id);

    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Getting some info about multiple things like

const getCoursesInfo = async (req, res) => {
  const faculty_id = req.empId;

  try {
    // Retrieve courses with information

    const courses = await Courses.find({ faculty_id }).populate({
      path: 'subjects.lectures.quiz.questions.students',
      model: 'Student',
    });

    res.json(courses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  getAllFaculties,
  getFacultyById,
  createCourse,
  createSubject,
  addLecture,
  addQuiz,

  //Removing the objects

  removeStudent,
  removeSubject,
  deleteCourse,

  // info
  getCoursesInfo,
};


