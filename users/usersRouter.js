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
router.post("/register", (req, res) => {
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
