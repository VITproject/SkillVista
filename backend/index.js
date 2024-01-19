require('dotenv').config();  // Load environment variables from .env file
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect('mongodb+srv://zeno254t:TZ6YdbG7uqJU23Uz@skillvista.hi5m3md.mongodb.net/?retryWrites=true&w=majority')
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

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
