const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const config = require('./config/auth.config');
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "swapnil",
    keys: [config.secret],
    httpOnly: true,
  })
);

// Connect to MongoDB
mongoose.connect(dbConfig.db[app.settings.env], {
  useNewUrlParser: true,
  useUnifiedTopology: true
});




const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database connected:", dbConfig.db[app.settings.env]);
});

db.on("error", (err) => {
  console.error("Connection error:", err);
});

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SkillVista application." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
