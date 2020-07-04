const Trips = require("./tripsModel");

function getTrips(req, res) {
  Trips.getTrips()
    .then((data) => {
      // console.log(data);
      res.status(200).json({ status: "success", data: data });
    })
    .catch((error) => {
      console.log("Error message", error);
      res.status(500).json({ status: "error", error: error.message });
    });
}

module.exports = {
  getTrips,
};
