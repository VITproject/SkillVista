require("dotenv").config(); // Load environment variables from .env file

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const connectToDatabase = require("./config/databaseConfig");
const authMiddleware = require("./middleware/authMiddleware");
const facultyMiddleware = require("./middleware/facultyMiddleware");
const facultyRoutes = require("./routes/facultyRoutes");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectToDatabase();

app.use("/auth", authRoutes);

app.use("/faculty", authMiddleware, facultyMiddleware, facultyRoutes);
app.use("/student", authMiddleware, studentRoutes);

app.get("/", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to SkillVista application." });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
