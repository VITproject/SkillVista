const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// Define routes
router.post("/s-signup", authController.studentSignUp);
router.post("/s-signin", authController.studentSignIn);
router.post("/f-signup", authController.facultySignUp);
router.post("/f-signin", authController.facultySignIn);

module.exports = router;