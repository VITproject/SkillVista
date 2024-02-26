
const express = require('express');

const facultyController = require('../controllers/facultyController');

const router = express.Router();

// Fetching Faculty 
router.get('/all', facultyController.getAllFaculties);
router.get('/:id', facultyController.getFacultyById);

//  Some Api Regarding Faculty Operation

router.post('/createCourse', facultyController.createCourse);

router.post('/createSubject', facultyController.createSubject);

router.post('/:subject_id/addLecture', facultyController.addLecture);

router.post('/:lecture_id/addQuiz', facultyController.addQuiz);

router.delete('/:course_id/removeStudent/:student_id', facultyController.removeStudent);

router.delete('/:course_id/removeSubject/:subject_id', facultyController.removeSubject);

router.delete('/:course_id/deleteCourse', facultyController.deleteCourse);

router.get('/getCoursesInfo', facultyController.getCoursesInfo);

module.exports = router;
