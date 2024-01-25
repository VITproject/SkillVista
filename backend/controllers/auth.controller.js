const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

exports.signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    if (req.body.roles) {
      // Assuming roles are predefined in your Mongoose model
      user.roles = req.body.roles;
    } else {
      // Default role
      user.roles = ["user"];
    }

    await user.save();

    res.status(201).send({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    const passwordIsValid = await bcrypt.compare(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid Password!" });
    }

    const token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    req.session.token = token;

    let authorities = [];
    user.roles.forEach(role => {
      authorities.push("ROLE_" + role.toUpperCase());
    });

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: authorities,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
