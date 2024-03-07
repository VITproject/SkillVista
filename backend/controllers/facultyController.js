// controllers/facultyController.js
require("dotenv").config();

const { uploadOnCloudinary } = require("../config/cloudinary");
const Faculty = require("../models/facultyModel");
const Courses = require("../models/courseModel");
const jwt = require("jsonwebtoken");
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
  const { empId } = req.body;
  try {
    const faculty = await Faculty.findOne({ empId });
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handleFileUpload = async (req, res) => {
  try {
    if (req.file) {
      const result = await uploadOnCloudinary(req.file.path);
      console.log(result);
      res.json({ success: true, message: "File uploaded successfully" });
    } else {
      throw new Error("No file provided in the request");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create Course by faculty

const createCourse = async (req, res) => {
  const { course_name } = req.body;
  const getIdFromToken = (token) => {
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      return decodedToken._id;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1];
    const faculty_id = await getIdFromToken(token);
    const faculty = await Faculty.findById(faculty_id);

    if (!faculty) {
      return res.status(404).json({ error: "Faculty not found" });
    }

    const newCourse = new Courses({
      course_name,
      faculty_id,
      createdBy: faculty.name, // Include the faculty's name as createdBy
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
  const { course_name, empId, subject_name } = req.body;

  try {
    const course = await Courses.findOne({ course_name });
    const empIdX = await Faculty.findOne({ empId });
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    if (!empIdX) {
      return res.status(404).json({ error: "Faculty not found" });
    }

    const newSubject = {
      subject_name,
      faculty_id: empIdX._id,
      lectures: [],
    };
    course.subjects.push(newSubject);
    if (!empIdX) {
      empIdX = new Faculty({
        empId,
        courses: [],
      });
    }
    const fCourseIndex = empIdX.courses.findIndex(
      (s) => s.course_name === course_name
    );
    if (fCourseIndex === -1) {
      empIdX.courses.push({
        course_name,
        subjects: [
          {
            subject_name,
          },
        ],
      });
    } else {
      empIdX.courses[fCourseIndex].subjects.push({
        subject_name,
      });
    }

    await course.save();
    await empIdX.save();
    res.status(200).json({ message: "Subject added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addLecture = async (req, res) => {
  const { course_name, subject_name } = req.body;
  const { lecture_title, video_url, quiz_title, questions } = req.body;

  try {
    const course = await Courses.findOne({ course_name });

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    const subjectIndex = course.subjects.findIndex(
      (s) => s.subject_name === subject_name
    );

    if (subjectIndex === -1) {
      return res.status(404).json({ error: "Subject not found in the course" });
    }

    const newLecture = {
      title: lecture_title,
      video: { url: video_url },
      quiz: [
        {
          title: quiz_title,
          questions: questions.map((q) => ({
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
          })),
        },
      ],
    };

    course.subjects[subjectIndex].lectures.push(newLecture);
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
      return res.status(404).json({ error: "Course not found" });
    }

    // Remove student from the course
    course.students = course.students.filter(
      (s) => s.toString() !== student_id
    );

    await course.save();

    res.json({ message: "Student removed from the course successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Removing the subject from course

const removeSubject = async (req, res) => {
  const { course_name, subject_name } = req.body;

  try {
    const course = await Courses.findOne({ course_name });

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    const subjectIndex = course.subjects.findIndex(
      (s) => s.subject_name === subject_name
    );

    if (subjectIndex === -1) {
      return res.status(404).json({ error: "Subject not found in the course" });
    }

    course.subjects.splice(subjectIndex, 1);

    await course.save();

    res.json({
      message: "Subject removed from the course successfully",
      course,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deleting the course

const deleteCourse = async (req, res) => {
  const { course_name } = req.body;

  try {
    // Remove the course from the database
    await Courses.findOneAndDelete(course_name);
    res.json({ message: "Course deleted successfully" });
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
      path: "subjects.lectures.quiz.questions.students",
      model: "Student",
    });

    res.json(courses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handleFileUpload,
  getAllFaculties,
  getFacultyById,
  createCourse,
  createSubject,
  addLecture,

  //Removing the objects

  removeStudent,
  removeSubject,
  deleteCourse,

  // info
  getCoursesInfo,
};
