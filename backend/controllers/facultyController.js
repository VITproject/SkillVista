// controllers/facultyController.js

const Faculty = require("../models/facultyModel");

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
  const { id } = req.params;
  try {
    const faculty = await Faculty.findById(id);
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllFaculties,
  getFacultyById,
};
