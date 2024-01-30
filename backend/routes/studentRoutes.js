// routes/studentRoutes.js


const express = require('express');
const studentController = require('../controllers/studentController');
const authController = require('../controllers/authController'); // Import authController

const router = express.Router();

// Define routes
router.post('/signup', authController.signup); // Use authController for student signup
router.post('/signin', authController.signin); // Use authController for student signin

// Additional student routes
router.get('/all', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);

module.exports = router;
