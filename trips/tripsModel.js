const db = require("../database/db-config");

function getTrips() {
  return db.select().table("trip");
}

async function addTrip(tripDetails) {
  const [newTrip] = await db("trip").insert(tripDetails, [
    "id",
    "bus_id",
    "origin",
    "destination",
    "trip_date",
    "fare",
  ]);
  
  return newTrip;
}

module.exports = {
  getTrips,
  addTrip,
};
