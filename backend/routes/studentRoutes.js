
const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

// Define routes

router.get('/all', studentController.getAllStudents);

router.get('/:id', studentController.getStudentById);

router.post('/:student_id/register/course/:course_id', studentController.registerForCourse);

router.post('/:student_id/register/course/:course_id/subject/:subject_id', studentController.registerForSubject);

router.get('/:student_id/subject/:subject_id/materials', studentController.accessSubjectMaterials);

module.exports = router;
