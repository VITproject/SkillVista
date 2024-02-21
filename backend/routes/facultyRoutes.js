
const express = require('express');

const facultyController = require('../controllers/facultyController');
const authMiddleware = require('../middleware/authMiddleware'); 

const router = express.Router();

// Fetching Faculty 
router.get('/all', facultyController.getAllFaculties);
router.get('/:id', facultyController.getFacultyById);

//  Some Api Regarding Faculty Operation

router.post('/createCourse', authMiddleware, facultyController.createCourse);

router.post('/:course_id/addSubject', authMiddleware, facultyController.addSubject);

router.post('/:subject_id/addLecture', authMiddleware, facultyController.addLecture);

router.post('/:lecture_id/addQuiz', authMiddleware, facultyController.addQuiz);

router.delete('/:course_id/removeStudent/:student_id', authMiddleware, facultyController.removeStudent);

router.delete('/:course_id/removeSubject/:subject_id', authMiddleware, facultyController.removeSubject);

router.delete('/:course_id/deleteCourse', authMiddleware, facultyController.deleteCourse);

router.get('/getCoursesInfo', authMiddleware, facultyController.getCoursesInfo);

module.exports = router;
