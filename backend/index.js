require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./config/databaseConfig');
const authMiddleware = require('./middleware/authMiddleware');
const facultyRoutes = require('./routes/facultyRoutes');
const studentRoutes = require('./routes/studentRoutes');



const app = express();

// Middleware
app.use(bodyParser.json());
app.use(authMiddleware);


// MongoDB Connection
connectToDatabase();


// Routes
app.use('/faculty', facultyRoutes);
app.use('/students', studentRoutes); 

app.get("/", (req, res) => {
  res.json({ message: "Welcome to SkillVista application." });
});


// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
