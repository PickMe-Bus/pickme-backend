// Bring in jwt
const jwt = require("jsonwebtoken");

// Make the function for token generation and export it
module.exports = function generateToken(member) {
  // const payload = {

  // }

  // Token expiration details
  const jwtSecrete = require("./secret").jwtSecret;
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(jwtSecrete, options);
};
