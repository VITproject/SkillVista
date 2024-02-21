// routes/facultyRoutes.js

const express = require("express");
const facultyController = require("../controllers/facultyController");

const router = express.Router();
router.get("/all", facultyController.getAllFaculties);
router.get("/:id", facultyController.getFacultyById);

module.exports = router;
