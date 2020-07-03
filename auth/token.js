// Bring in jwt
const jwt = require("jsonwebtoken");

// Make the function for token generation and export it
module.exports = function generateToken(member) {
  const payload = {
    subject: member.id,
    email: member.email,
    is_admin: member.is_admin,
  };

  // Token expiration details
  const jwtSecrete = require("./secret").jwtSecret;
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload,jwtSecrete, options);
};
