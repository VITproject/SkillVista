// routes/studentRoutes.js

const express = require("express");
const studentController = require("../controllers/studentController");

const router = express.Router();
router.get("/all", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);

module.exports = router;
