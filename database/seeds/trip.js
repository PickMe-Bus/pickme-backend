
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trip').del()
    .then(function () {
      // Inserts seed entries
      return knex('trip').insert([
        {
          bus_id: 2,
          origin: "Obalende",
          destination: "Ikorodu",
          trip_date: "2020-07-03",
          fare: 150,
          status: 1
        },
        {
          bus_id: 1,
          origin: "Obalende",
          destination: "Ikorodu",
          trip_date: "2020-07-03",
          fare: 150,
          status: 1
        },
        {
          bus_id: 3,
          origin: "V.I",
          destination: "Lekki",
          trip_date: "2020-07-04",
          fare: 550,
        },
      ]);
    });
};
