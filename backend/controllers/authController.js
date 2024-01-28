// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Faculty = require('../models/facultyModel'); // Assuming you have a Faculty model

const signup = async (req, res) => {
  const { name, empId, password } = req.body;

  try {
    // Check if faculty with the same empId exists
    const existingFaculty = await Faculty.findOne({ empId });

    if (existingFaculty) {
      return res.status(400).json({ message: 'Faculty with the same empId already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new faculty
    const newFaculty = new Faculty({ name, empId, password: hashedPassword });
    const savedFaculty = await newFaculty.save();

    // Generate JWT token
    const token = jwt.sign({ empId: savedFaculty.empId }, process.env.JWT_SECRET);

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const signin = async (req, res) => {
  const { empId, password } = req.body;

  try {
    // Find faculty by empId
    const faculty = await Faculty.findOne({ empId });

    if (!faculty) {
      return res.status(401).json({ message: 'Invalid empId or password' });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, faculty.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid empId or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ empId: faculty.empId }, process.env.JWT_SECRET);

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signup,
  signin,
};
