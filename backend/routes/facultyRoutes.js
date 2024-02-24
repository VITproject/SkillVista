// routes/facultyRoutes.js

const express = require("express");
const facultyController = require("../controllers/facultyController");
const multer = require("multer");
const uploadDest = multer({ dest: "uploads/" });

const router = express.Router();
router.get("/all", facultyController.getAllFaculties);
router.get("/:id", facultyController.getFacultyById);
router.post("/upload", uploadDest.single("file"), facultyController.handleFileUpload);

module.exports = router;
