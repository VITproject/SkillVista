
const express = require("express");
const facultyController = require("../controllers/facultyController");
const multer = require("multer");
const uploadDest = multer({ dest: "uploads/" });

const router = express.Router();

// Fetching Faculty 
router.get('/all', facultyController.getAllFaculties);//
router.get('/facultyInfo', facultyController.getFacultyById);//
router.post("/upload", uploadDest.single("file"), facultyController.handleFileUpload);//

//  Some Api Regarding Faculty Operation

router.post('/createCourse', facultyController.createCourse);//

router.post('/createSubject', facultyController.createSubject);//

router.post('/addLecture', facultyController.addLecture);//

router.delete('/:course_id/removeStudent/:student_id', facultyController.removeStudent);

router.delete('/removeSubject', facultyController.removeSubject);//

router.delete('/deleteCourse', facultyController.deleteCourse);//

router.get('/getCoursesInfo', facultyController.getCoursesInfo);

module.exports = router;
