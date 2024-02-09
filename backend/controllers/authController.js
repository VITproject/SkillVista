require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Student = require("../models/studentModel");
const Faculty = require("../models/facultyModel");

const facultySignUp = async (req, res) => {
  const { name, email, empId, password } = req.body;
  try {
    const existingFaculty = await Faculty.findOne({ empId });
    if (existingFaculty) {
      return res.status(400).json({ error: "Faculty with same empId exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newFaculty = new Faculty({
      name,
      email,
      empId,
      password: hashedPassword,
    });
    const savedFaculty = await newFaculty.save();
    const token = jwt.sign(
      { empId: savedFaculty.empId },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(201).json({ savedFaculty, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const facultySignIn = async (req, res) => {
  const { empId, password } = req.body;
  try {
    const faculty = await Faculty.findOne({ empId });
    if (!faculty) {
      return res.status(401).json({ error: "Invalid empId." });
    }
    const passwordMatch = bcrypt.compare(password, faculty.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password." });
    }
    const token = jwt.sign({ empId: faculty.empId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Sign in successful", token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const studentSignUp = async (req, res) => {
  const { name, email, password, courses } = req.body;
  try {
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res
        .status(400)
        .json({ error: "Student with the same email already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newStudent = new Student({
      name,
      email,
      password: hashedPassword,
      courses,
    });
    const savedStudent = await newStudent.save();
    const token = jwt.sign(
      { email: savedStudent.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(201).json({ savedStudent, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const studentSignIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    const isPasswordValid = bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
      res.status(401).json({ error: "Invalid password" });
      return;
    }
    const token = jwt.sign({ email: student.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Sign in successful", token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  facultySignUp,
  facultySignIn,
  studentSignUp,
  studentSignIn,
};
