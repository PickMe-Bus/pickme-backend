// Bring in the database configuration
const userdb = require("../database/db-config");

// Create the helper functions for the user database
module.exports = {
  addUser,
  getUserBy,
  getUser,
};

function addUser({ email, first_name, last_name, password, is_admin }) {
  // This is the SQL equivalent of INSERT INTO users(columns) VALUES(data to be added)
  return userdb("users").insert({
    email,
    first_name,
    last_name,
    password,
    is_admin,
  });
}

function getUserBy(email) {
  return userdb("users").where({ email }).first();
}

function getUser() {
  return userdb("users");
}
