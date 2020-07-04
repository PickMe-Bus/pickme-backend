const router = require("express").Router();

const trips = require("./tripsController");

router.get("/", trips.getTrips)

module.exports = router