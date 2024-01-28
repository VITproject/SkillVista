// controllers/facultyController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Faculty = require('../models/facultyModel');

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

// Create a new faculty

const createFaculty = async (req, res) => {
  const { name, empId, password, courses } = req.body;
  try {
    const newFaculty = new Faculty({ name, empId, password, courses });
    const savedFaculty = await newFaculty.save();
    res.status(201).json(savedFaculty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Faculty signup
const signup = async (req, res) => {
  const { name, empId, password, courses } = req.body;

  try {
    // Check if faculty with the same empId already exists
    const existingFaculty = await Faculty.findOne({ empId });
    if (existingFaculty) {
      return res.status(400).json({ error: 'Faculty with the same empId already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new faculty
    const newFaculty = new Faculty({ name, empId, password: hashedPassword, courses });
    const savedFaculty = await newFaculty.save();

    res.status(201).json(savedFaculty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Faculty signin
const signin = async (req, res) => {
  const { empId, password } = req.body;

  try {
    // Find faculty by empId
    const faculty = await Faculty.findOne({ empId });

    // Check if faculty exists
    if (!faculty) {
      return res.status(401).json({ error: 'Invalid empId or password.' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, faculty.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid empId or password.' });
    }

    // Generate and return a JWT token
    const token = jwt.sign({ empId: faculty.empId }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  getAllFaculties,
  getFacultyById,
  createFaculty,
  signup,
  signin,
};
