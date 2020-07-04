const db = require("../database/db-config")

function getTrips() {
    return db.select().table("trip")
}

// console.log(getTrips())

module.exports = {
    getTrips
}