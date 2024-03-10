
const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

// Define routes

router.get('/getCoursesInfo', studentController.getCoursesInfo);//

router.get('/all', studentController.getAllStudents);

router.get('/:id', studentController.getStudentById);

router.post('/register/:course_name', studentController.registerForCourse);//

router.get('/:student_id/subject/:subject_id/materials', studentController.accessSubjectMaterials);


module.exports = router;
