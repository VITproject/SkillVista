require('dotenv').config();  // Load environment variables from .env file
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const { upload } = require('./middleware/multer.middleware');
const { uploadOnCloudinary} = require('./utils/cloudinary')

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.DATABASE_STRING)
  .then(() => console.log('Database Connected Successfully \nhttp://localhost:3000/'))
  .catch(err => console.log(err));

// Express Session
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default-secret-key",
    resave: true,
    saveUninitialized: true,
  })
);

// Routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to SkillVista application." });
});


app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const result = await uploadOnCloudinary(req.file.path);
    console.log(result)
    res.json({ success: true, message: "File uploaded successfully"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
