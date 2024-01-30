// routes/facultyRoutes.js

const express = require('express');
const facultyController = require('../controllers/facultyController');
const authController = require('../controllers/authController'); // Import authController

const router = express.Router();

// Define routes
router.post('/signup', authController.signup); // Use authController for faculty signup
router.post('/signin', authController.signin); // Use authController for faculty signin

// Additional faculty routes
router.get('/all', facultyController.getAllFaculties);
router.get('/:id', facultyController.getFacultyById);

module.exports = router;
