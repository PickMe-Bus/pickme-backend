const Trips = require("./tripsModel");

function getTrips(req, res) {
  Trips.getTrips()
    .then((data) => {
      // console.log(data);
      res.status(200).json({ status: "success", data: data });
    })
    .catch((error) => {
      console.log("Error message", error);
      res.status(500).json({ status: "error", error: "Unable to process your request" });
    });
}

function addTrip(req, res) {
  const newTrip = req.body;
  Trips.addTrip(newTrip)
    .then((data) => {
      // console.log(data)
      res.status(200).json({ status: "success", data: data });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ status: "error", error: "Unable to process your request" });
    });
}

module.exports = {
  getTrips,
  addTrip,
};
