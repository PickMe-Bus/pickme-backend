// Bring in the server from server.js
const server = require("./api/server");

// Define a port
const PORT = process.env.PORT || 7000;

// Listen to the server
server.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
