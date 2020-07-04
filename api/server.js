// Import the pre-baked middleware
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const tripsRouter = require("../trips");

// Create an instance of the server by invoking express
const server = express();

// Make use of the pre-baked middleware
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(logger);

server.use("/api/v1/trips", tripsRouter);

server.get("/", (req, res) => {
  res.send("<h2>Welcome to pick-me</h2>");
});

// If the endpoint is invalid
server.get("*", (req, res) => {
  res.send(`message: This is an invalid path`);
});

// Create a custom logger middleware
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString}] ${req.method} ${req.url} from ${req.get(
      "Origin"
    )}`
  );
  next();
}

module.exports = server;
