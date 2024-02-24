// controllers/facultyController.js

const Faculty = require("../models/facultyModel");
const { upload } = require("../middleware/multer.middleware");
const { uploadOnCloudinary } = require("../config/cloudinary");

const getAllFaculties = async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.json(faculties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get faculty by ID
const getFacultyById = async (req, res) => {
  const { id } = req.params;
  try {
    const faculty = await Faculty.findById(id);
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const handleFileUpload = async (req, res) => {
  try {
    if (req.file) {
      const result = await uploadOnCloudinary(req.file.path);
      console.log(result);
      res.json({ success: true, message: "File uploaded successfully" });
    } else {
      throw new Error("No file provided in the request");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllFaculties,
  getFacultyById,
  handleFileUpload,
};
