// Bring in express
const express = require("express");
// Bring in the helper functions from userDB.js
const users = require("./usersDB");
// Import the router
const router = express.Router();
// Bring in bcrypt
const bcrypt = require("bcryptjs");

// Users endpoints here 👇👇👇
// This is the register endpoint
router.post("/register", validateUser, (req, res) => {
  const { email, first_name, last_name, password, is_admin } = req.body;
  //   The password has to be hashed
  const hashedPassword = bcrypt.hashSync(password, 10);
  //   Add a new user
  const newUser = {
    email,
    first_name,
    last_name,
    password: hashedPassword,
    is_admin,
  };
  users
    .addUser(newUser)
    .then((member) => {
      res.status(201).json({ message: `Success`, newUser });
    })
    .catch((error) => {
      error.status(500).json({ message: error.message, stack: error.stack });
    });
});

// Middleware for validating user inputs
function validateUser(req, res, next) {
  const addedUser = req.body;
  if (Object.keys(addedUser).length === 0) {
    res.status(400).json({ message: "Invalid inputs" });
  } else if (!addedUser.email) {
    res.status(400).json({ message: "Please enter a valid email" });
  } else if (!addedUser.first_name) {
    res.status(400).json({ message: "Please input your first name" });
  } else if (!addedUser.last_name) {
    res.status(400).json({ message: "Please input your last name" });
  } else if (!addedUser.password) {
    res.status(400).json({ message: "You have not chosen a password" });
  } else if (!addedUser.is_admin) {
    res.status(400).json({ message: "Are you an admin?" });
  } else {
    next();
  }
}
