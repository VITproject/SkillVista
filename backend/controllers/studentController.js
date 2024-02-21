// controllers/studentController.js
const Student = require("../models/studentModel");

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().distinct("name");
    const studentIds = students.map(student => student._id);
    console.log(studentIds);
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get student by ID
const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
};
