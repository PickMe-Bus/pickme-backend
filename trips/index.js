const router = require("express").Router();

const trips = require("./tripsController");

router.get("/", trips.getTrips)
router.post("/", trips.addTrip)

module.exports = router